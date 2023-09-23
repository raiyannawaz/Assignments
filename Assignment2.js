// Question Number One 
const checkTriangle = (a, b, c) => {
    if (a == b && b == c) {
        console.log('The Triangle is Equilateral')
    }
    else if (a == b || b == c || a == c) {
        console.log('The Triangle is Isosceles')
    }
    else {
        console.log('The Triangle is Scalene')
    }
}

// Question Number Two 
let marks = -10;

switch (marks) {
    case 90:
    case 100:
        console.log('S Grade')
        break;
    case 80:
    case 90:
        console.log('A Grade')
        break;
    case 70:
    case 80:
        console.log('B Grade')
        break;
    case 60:
    case 70:
        console.log('C Grade')
        break;
    case 50:
    case 60:
        console.log('D Grade')
        break;
    case 40:
    case 50:
        console.log('E Grade')
        break;
    case 0:
    case 40:
        console.log('Student has failed')
        break;
    default:
        console.log('Invalid Marks')
        break;
}

// Question Number Three
for (let i = 0; i <= 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} can be divided by 3 & 5`)
    }
    else if (i % 3 == 0) {
        console.log(`${i} can be divided by 3 only`)
    }
    else if (i % 5 == 0) {
        console.log(`${i} can be divided by 5 only`)
    }
}


// Question Number Four