// Deposit some money
// Determine number of lines to bet on
// Collect a bet amount
// Spin the machine
// Check if the user won
// Give the user their winnings
// Play again

const prompt = require("prompt-sync")();

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

let balance = deposit()
// console.log('Deposited amount is: ',depositAmount);
const lines = numberOfLines()
// console.log('Total no of lines are: ',lines);
const bet = getBet(balance,lines)