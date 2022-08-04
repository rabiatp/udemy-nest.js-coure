
let argument = process.argv.slice(2)

function showPrimeNumbers(lowNumbers,highNumbers) {
    for(let i = lowNumbers; i <= highNumbers; i++)
    {
        let primeNumbers = true;

        for (let j=2; j <= i; j++){
            
            if(i % j === 0 && j !== i)
                primeNumbers = false
        }
         if (primeNumbers)
            console.log(i)
            
    }
}

//showPrimeNumbers(7,22)
console.log(showPrimeNumbers(argument[0]*1,argument[1]*1))
