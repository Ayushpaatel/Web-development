// console.log("Hello World")

// let a = 5;
// let b = 2;
// console.log("a = ",a);
// console.log("b = ", b);
// console.log("a + b = ", a+b);
// console.log("a - b = ", a-b);
// console.log("a * b = ", a*b);
// console.log("a/b = " , a/b);
// console.log("a % b = ",a%b);
// console.log("a ** b = ", a**b);

// unary operator
// console.log("a = ",a, "b = ",b);
// a--;
// console.log("a = ", a);


// assignment operators

// a += 4;
// console.log(a);

// comparisons operators

// console.log(a==b);
// console.log(a!=b);
// console.log(5 === "5");  
// console.log(5 !== "5");
// console.log(5 > 3);
// console.log(5<3);
// console.log(5 <= 3);
// console.log(5 >= 3);  

//Logical operators

// let a = 5;
// let b = 2;

// let cond1 = a > b;
// let cond2 = a < b;

// console.log(cond1 && cond2);
// console.log(cond1 || cond2);
// console.log(!(cond1));


//Conditional Statement

// let age = 19;
// if(age > 18){
//     console.log("you can vote");
// }else{
//     console.log("You can not vote");
// }

// let num = 20;
// if(num%2 === 0){
//     console.log("Even No.");
// }else{
//     console.log("Odd No.");
// }

// let age = 60;

// if(age < 18){
//     console.log("Junior");
// }else if( 18 <= age && age < 50 ){
//     console.log("Middle");
// }else{
//     console.log("Old");
// }

// let age =20;

// age > 18 ? console.log("Adult"): console.log("Not Adult")


// let number = prompt("Please enter the desired no.");

// if(number%5 === 0){
//     alert( "The number is multiple of 5");
// }else{
//     alert( "The number is not a multiple of 5");
// }

let number = prompt("Enter you marks");

if(number >=80 && number<=100){
    alert("Score Card : A");
}else if(number >=70 && number<= 89){
    alert("Score Card : B");
}else if(number >= 60 && number<= 69){
    alert("Score Card : C");
}else if(number >= 50 && number<= 59){
    alert("Score Card : D");
}else{
    alert("Score Card : F");
}
