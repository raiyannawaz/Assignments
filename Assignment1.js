// Question Number One 
let year = 2024;

if (year % 4 === 0) {
    console.log(`${year} is a leap year`)
}
else {
    console.log(`${year} is not a leap year`)
}


// Question Number Two
let temprature = '60°C';

if (temprature.endsWith('C')) {
    let Celcius = parseInt(temprature)
    let Fahrenheit = (Celcius * 9 / 5) + 32;
    console.log(`${Fahrenheit}°F`)
}
else if (temprature.endsWith('F')) {
    let Fahrenheit = parseInt(temprature);
    let Celcius = (Fahrenheit - 32) * 5 / 9;
    console.log(`${Celcius}°C`)
}
else {
    console.log(`Error`)
}


// Question Number Three
let i = 10;

val = i;
for (i > 0; i--;) {
    val = val * i;
    if (i == 1) {
        break;
    }
}
console.log(val)