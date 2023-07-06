// Deposit some money
// Determine number of lines to bet on
// Collect a bet amount
// Spin the machine
// Check if the user won
// Give the user their winnings
// Play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOLS_VALUE = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}


const deposit = () => {
    while(true) {
        const depositAmount = prompt("Enter a deposit amount: ")
        const numberdepositAmount = parseFloat(depositAmount)

        if (isNaN(numberdepositAmount) || numberdepositAmount <= 0)
        {
            console.log('Please enter a valid number');
        }
        else
        {
            return numberdepositAmount
        }
    }
}

const numberOfLines = () => {
    while(true)
    {
        const lines = prompt('Enter the no of lines to bet on: ')
        const numberOfLines = parseFloat(lines)
        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3)
        {
            if(numberOfLines > 3)
            {
                console.log('Enter a Number between 1 to 3 and try again.');
            }
            else
            {
                console.log('Please enter a valid No')
            }
        }
        else 
        {
            return numberOfLines
        }
    }
}

const getBet = (balance,lines) => {
    while(true)
    {
        const bet = prompt('Enter the bet per line: ')
        const numberbet = parseFloat(bet)
        if(isNaN(numberbet) || numberbet <= 0 || numberbet > balance / lines)
        {
            if(numberbet > balance)
            {
                console.log('The Amount is more than the Balance Amount. So Enter a valid Amount 🙂');
            }
            else
            {
                console.log('Please enter a valid Amount')
            }
        }
        else 
        {
            return numberbet
        }
    }
}


const Spin = () => {
    const symbols = [];
    for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for(let i = 0 ; i < count ; i++) {
            symbols.push(symbol)
        }
    }

    const reels = [] ;
    for (let i = 0; i < COLS; i++)
    {
        reels.push([]);
        const reelSymbols = [...symbols];
        for(let j = 0; j < ROWS ; j++)
        {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);

        }
    }

    return reels;
};

const transpose = (reels) => {
    const rows = [];

    for(let i = 0 ; i < ROWS ; i++)
    {
        rows.push([]);
        for(let j = 0; j < COLS ; j++)
        {
            rows[i].push(reels[j][i])
        }
    }

    return rows;
};

const printRows = (rows) => {
    for(const row of rows)
    {
        let rowString = "";
        for(const [i, symbol] of row.entries()){
            rowString += symbol
            if (i != row.length - 1){
                rowString += " | "
            }
        }
        console.log(rowString);
    }
}


let balance = deposit()
const lines = numberOfLines()
const bet = getBet(balance,lines)
const reels = Spin();
const rows = transpose(reels);
printRows(rows);