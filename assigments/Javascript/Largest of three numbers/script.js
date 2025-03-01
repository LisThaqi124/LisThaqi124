let firstNumber = parseInt(prompt("Write first number"))
let secondNumber = parseInt(prompt("Write second number"))
let thirdNumber = parseInt(prompt("Write third number"))

if(secondNumber < firstNumber && firstNumber > thirdNumber){
    console.log(`${firstNumber} number is bigger`)
}
else if(firstNumber < secondNumber && secondNumber > thirdNumber){
    console.log(`${secondNumber} number is bigger`)
}
else{
    console.log(`${thirdNumber} number is bigger` )
}
