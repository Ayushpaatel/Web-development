const myText = document.getElementById("myText");
const myResult = document.getElementById("myResult");
const mySubmit = document.getElementById("mySubmit");
let age ;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);
    if(age >= 100){
        myResult.textContent = "You are Too Old to enter this site";
    }
    else if(age == 0){
        myResult.textContent = "You cant enter,you were just born";
    }
    else if(age >= 10){
        myResult.textContent = "You are old enough to enter this site";
    }
    else if(age < 0){
        myResult.textContent = "Your age can't be below 0";
    }
    else{
        myResult.textContent = "You must be 18+ to enter this site";
}
}
