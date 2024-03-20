const minVal = 1;
const maxVal = 100;

const answer = Math.floor(Math.random() * (maxVal- minVal + 1) + minVal);
let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minVal} - ${maxVal}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }else if(guess < minVal || guess > maxVal){
        window.alert(`Please enter the valid number`);
    }else{
        attempts++;
        if(guess< answer){
            window.alert("Too Low! Try Again");
        }else if(guess > answer){
            window.alert("Too High! Try Again");
        }else{
            window.alert(`Correct! The answer was ${answer}.It took you ${attempts} attempts.` );
            running = false;
        }
    }
   
}