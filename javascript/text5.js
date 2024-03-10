// function myFunction(){
//     console.log("Hello Ayush Patel");
// }

// myFunction();

// function myFunction_1(msg){
//     console.log(msg);
// }

// myFunction_1("I love Javascript");

// function sum(x,y){
//     s = x+y;
//     return s;
// }
// sum(4,5);

// console.log(sum(4,5));

// //Arrow fucntion

// const myFunction_3 = (a,b) =>{
//     console.log(a+b);
// };

// myFunction_3(3,4);

// const mul = (a,b) => {
//     console.log(a*b);
// }
// mul(4,5)

//Practice

// function myString(msg_2) {
//   let msg = msg_2.toLowerCase();
//   sum = 0;
//   for (let i = 0; i < msg.length; i++) {
//     let a = msg.charAt(i);
//     if (a === "a" || a === "e" || a === "i" || a === "o" || a === "u") {
//       sum++;
//     }
//   }
//   return sum;
// }

// console.log(myString("AYUSHPATEL"));

// function myString_2(msg_2){
//     sum = 0;
//     let msg = msg_2.toLowerCase();
//     for(let vowels of msg){
//         if(vowels === "a" || vowels === "e" || vowels === "i" || vowels === "o" || vowels === "u"){
//             sum++;
//         }
//     }
//     return sum;
// };
// console.log(myString_2("AyushPAtelNAmna"));



// const myString = (msg) =>{
//     sum = 0;
//     let msg_2 = msg.toLowerCase();
//     for(let vowels of msg_2){
//         if(vowels ==="a"||vowels ==="e"||vowels ==="i"||vowels ==="o"||vowels ==="u"){
//             sum++;
//         }
//     }
//     return sum;
// };

// console.log(myString("shcbwdcwcbjucbjebcjebclbeckberc"));


//ForEach Function

// array = ["Ayush","Nehal","Naman","Shikhar","Amzad"];

// array.forEach((value, index)=>{
//     console.log(value,index);
// });


// array = [2,3,4,5,6,7,8];
// array.forEach((value)=>{
//     console.log(value**2);
// });


//Map method
// array_2 = [2,3,4,5,6,7,8,9];
// let array = array_2.map((value)=>{

//     return value * value;
// });

// console.log(array);

//Filter Methods

// array = [1,2,3,4,5,6,78,89,0,9,8,8,7,6,5,5];
// let newArray = array.filter((value) => {
//     return value%2 === 0;
// })
// console.log(newArray);

//reduce

// array = [1,2,3,4,5,6,7,8,9,10];
// let output = array.reduce((result,current)=>{

//        return result > current ? result:current;
// })

// console.log(output);

//Practice

// arrays = [65,78,65,76,89,90,98,97,94,92];

// let array = arrays.filter((val)=>{
//     return val>90;
// })
// console.log(array);


let number = prompt("Enter the desired number : ");

let arr = [];

for(let i = 1;i<=number;i++){
    arr[i] = i;
}

let array = arr.reduce((res,cur) => {
    return res + cur;
});


let array_2 = arr.reduce((res,cur) => {
    return res*cur;
});

alert(`Your sum is ${array} and your product is ${array_2}`);