// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const mastercardBtn = document.getElementById("mastercardBtn");
// const paypalBtn = document.getElementById("paypalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function(){
//     if(myCheckbox.checked){
//         subResult.textContent = "You are subscribed";
//     }else{
//         subResult.textContent = "You are not Subcribed"
//     }
//     if(visaBtn.checked){
//         paymentResult.textContent = "You are paying with visa";
//     }else if(paypalBtn.checked){
//         paymentResult.textContent = "You are paying with paypal";
//     }else if(mastercardBtn.checked){
//         paymentResult.textContent = "You are paying with mastercard";
//     }else{
//         paymentResult.textContent = "You have not added any payment mode";
//     }
// }

//Ternary Operator

// let age = 21;

// let message = age>=18 ? "You're an adult":"You're an minor";
// console.log(message);

// let time = 16;
// let greeting = time<12?"Good Morning":"Good Afternoon";
// console.log(greeting);

// let purchase = 125;

// let discount = purchase >=100 ? 10 : 0;
// console.log(`Your total is $${purchase - purchase*(discount/100)}`);


//Switch operation


// let day = 10;

// switch(day){
//     case 1 :
//         console.log("It is Monday");
//         break;
//     case 2 :
//         console.log("It is Tuesday");
//         break;
//     case 3 :
//         console.log("It is Wednesday");
//         break;
//     case 4 :
//         console.log("It is Thursday");
//         break;
//     case 5 :
//         console.log("It is friday");
//         break;
//     case 6 :
//         console.log("It is Saturday");
//         break;
//     case 7 :
//         console.log("It is Sunday");
//         break;   
//     default:
//         console.log("You are randi");
// }


// let textScore = 92;
// let letterGrade;

// switch(true){
//     case testScore >= 90:
//          letterGrade = "A";
//         break;
//     case testScore >= 80:
//          letterGrade = "A";
//         break;
//     case testScore >= 70:
//          letterGrade = "A";
//         break;
//     default:
//         letterGrade = "F";
// }
// console.log(letterGrade);

//string methods = allow you to manipulate and work with text(string)

//  let username = " bro Code ";
//  console.log(username.charAt(0));
//  console.log(username.indexOf("o"));
//  console.log(username.length);
//  console.log(username.trim());
//  console.log(username.toUpperCase());
//  console.log(username.toLowerCase());
//  console.log(username.repeat(3));
//  console.log(username.startsWith(" "));
//  console.log(username.endsWith(" "));
//  console.log(username.includes(" "));
//  console.log(username.replaceAll(" ","-"));
//  console.log(username.padStart(15,"0"));


//String Slicing = creating a substring

// const fullName = "Bro Code";
// // let firstName = fullName.slice(0,3);
// // console.log(firstName);
// // console.log(fullName.slice(4,8));
// // console.log(fullName.slice(0,1));
// console.log(fullName.slice(0,fullName.indexOf(" ")));
// console.log(fullName.slice(fullName.indexOf(" ")+1));
