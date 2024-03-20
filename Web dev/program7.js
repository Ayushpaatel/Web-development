//callback
// function hello(callback){
//     console.log("Hello");
//     callback();
// }
// function goodbye(){
//     console.log("Goodbye"); 
// }
// function sum(callback,x,y){
//     let result = x+y;
//     callback(result);
// }
// function displayConsole(result){
//     console.log(result);
// }
// sum(displayPage,5,9);


// function displayPage(result){
//     document.getElementById("myH1").textContent = result;
// }

//forEach(callback);




// numbers.forEach(display);
// let numbers = [1,2,3,4,5];

// function double(element,index,array){
//     array[index] = element * 2;

// }

// numbers.forEach(double);
// function display(element){
//     console.log(element);
// }


// let fruits = ["Apple","Orange","Banana","Coconut"];

// fruits.forEach(upperCase);

// function upperCase(element,index,array){
//     array[index] = element.toUpperCase();
// }
// function display(element){
//     console.log(element);
// }


//map

// const number = [1,2,3,4,5,6];

// const squares = number.map(square);

// function square(element){
//     return Math.pow(element,2);
// }
// console.log(squares);
// const cubes = number.map(cube);
// function cube(element){
//     return Math.pow(element,3);
// }

// console.log(cubes)

// const students = ["AyusH","NamaN","PuneeT","dayansH"];

// const studentUpper = students.map(upperCase);

// function upperCase(element){
//     return element.toUpperCase();
// }
// console.log(studentUpper);

// function lowerCase(element){
//     return element.toLowerCase();
// }
// const studentLower = students.map(lowerCase);
// console.log(studentLower);

// function alphabet(element){
//     element =  element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
//     return element;
// }
// const student = students.map(alphabet);

// console.log(student);


// const dates = ["2024-1-10","2025-2-20","2026-3-30"];

// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }
// // const newDates = ;
// console.log(dates.map(formatDates));


// filter

// let numbers = [1,2,3,4,5,6,7,8,9,0];
// let num = numbers.filter(isEven);
// function isEven(element){
//     return element % 2 ===0;
// }
// console.log(num);
 

//reduce

// let numbers = [1,2,3,4,5,6];
// let total = numbers.reduce(sum);
// let max = numbers.reduce(getMax);
// function sum(accumulator,element){
//     return accumulator+element;
// }
// console.log(total);
// function getMax(accumulator,element){
//     return Math.max(accumulator,element);
// }
// console.log(max);

//function declaration 

// function hello(){
//     console.log("hello");
// }
//function expression
// const hello = function(){
//     console.log("Hello");
// }
// hello();

//Arrow function


// const hello = (name,age) => { console.log(`Hello, ${name}`)
//                               console.log(`You are ${age} years old`)};

// hello("Ayush",18);

// const number = [1,2,3,4,5,6];

// const square = number.map((element)=>Math.pow(element,2));
// console.log(square);