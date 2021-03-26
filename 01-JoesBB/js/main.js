
document.querySelector('#company').innerHTML = "Joe's Bed and Breakfast";

document.querySelector('header > h2').innerText = "Best B&B in all the land!";

let userName = prompt("What is your name?");

let message = `Hello ${userName}, welcome to the best lodging in all the land!`;

document.querySelector('#greeting').innerText = message;
