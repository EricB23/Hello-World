'use strict'

function yourname(){
    let usersname = prompt('What is your name?');

    return document.write(usersname)   
}
function guessANumber(){
let answer;

while (answer != 7){
    answer = prompt('Guess a number between 1-10');
    if(answer !=7){
        alert('Try again');
     }  else{
        alert('You are correct');
     }
    }
}

function displayrating(){
    let output = '';
    let rating = prompt('scale of 1-5, how many stars?');
    for(let i = 0; i < rating; i++){
        output += "<img class='star' src="
    }
}
function timeofDay() {
    let time = prompt('What hour is it?)(0-23)');
    let message ='';

    if(time <= 11){
        message = 'Good Morning!';
    }else if( time <= 18){
        message = 'Good Afternoon!';
    }else if( time < 24){
        message = 'Good Evening!';
    }else{
        message = 'That time does not exist!!!'
    }
    return message
}

function showCars(){
    let shownCar = '';
    let usersCar = prompt('Which brand do you prefer? Nissan, Ford, or BMW?');
    while(usersCar !== 'Nissan' || usersCar !== 'Ford' || usersCar !== 'BMW'){
        if (usersCar === 'Nissan'){
            shownCar = "<img src = 'images/2023-nissan-sentra-101.jpeg' alt='A 2023 Nissan Sentra.'/>"
            break;
          }  else if (usersCar === 'Ford'){
              shownCar = "<img src = 'images/2023-ford-edge-101.jpeg' alt ='A 2023 Ford Edge.'/>"
              break;
             } else if (usersCar === 'BMW'){
                shownCar = "<img src='images/2024-BMW-5-series.jpeg' alt='A 2024 BMW 5-Series.'/>"
                break;
            }
            else {
                alert('This was not a choice, please try again!!');
            }
        }
        return document.write(shownCar);
}

guessANumber();

