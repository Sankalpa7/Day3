/* 1. Declare firstName, lastName, country, city, age, isMarried, year variable 
and assign value to it and use the typeof operator to check different data types.
*/ 
 let firstName = 'Sam';
 let lastName = 'Ferrer';
 let country = 'Australia';
 let city = 'Sydney';
 let age = 24;
 let isMarried = false;
 let year = 2019;

 console.log(typeof(firstName));
 console.log(typeof(lastName));
 console.log(typeof(country));
 console.log(typeof(city));
 console.log(typeof(age));
 console.log(typeof(isMarried));
 console.log(typeof(year));

 let ten = '10'
 let ten1 = 10;
 console.log(ten === ten1);


 let a = 1;
 let b = false;
 let c = ['ra', 'one']

 let d = -0;
 let e = '';
 let f = [];

 console.log(4 === '4');
// 4. Use the Date object to do the following activities
 let x = new Date()
 console.log(x);
 console.log(x.getFullYear());
 console.log(x.getMonth());
 console.log(x.getDate());
 console.log(x.getDay());
 console.log(x.getHours());
 console.log(x.getMinutes());
 console.log(x.getSeconds());


 // Write a script that prompt the user to enter base 
 //and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
 
let base = prompt("Enter base: ");
let height = prompt("Enter height: ");

let area = 0.5 * base * height;

console.log(area);

//Write a script that prompt the user to enter side a, side b,
// and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let sideA = parseInt(prompt("Enter the side a: "))
let sideB = parseInt(prompt("Enter the side b: "))
let sideC = parseInt(prompt("Enter the side c: "))

let perimeter = sideA + sideB + sideC;

console.log(perimeter);
