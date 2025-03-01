let year = parseInt(prompt("Write any year"))

if((year % 4 == 0) || (year % 8 == 0)){
    console.log(`${year} is a leap year`)
}
else{
    console.log(`${year} is a not a leap year`)
}