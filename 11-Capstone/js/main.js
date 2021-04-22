
document.querySelector('#pageTitle').innerHTML = "Get to know your favorite Utah Jazz players!";

async function getPlayers() {
  try {
    const response = await fetch("https://api-nba-v1.p.rapidapi.com/players/teamId/40", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "73af9c8ba3msh9b302b7b7b57a7fp1dba5ajsna371f077a14a",
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
      }
    })
    return await response.json();
    
  } catch (error) {
    console.error(error)
  }
}


let players = {}
let playersArray = ['Donovan Mitchell', 'Rudy Gobert', 'Mike Conley', 'Bojan Bogdanovic', `Royce O'Neale`];
const displayResults = document.querySelector("#displayResults")

//Display list of players
const listPlayers = () => {
  let playerList = ''
  playersArray.forEach(player => {
      playerList += `${player} <br>`
  })
  
  displayResults.innerHTML = `${playerList}`
}
listPlayers();

document.querySelector('#sort').onclick = () => {
  if (playersArray.length >= 2){
      playersArray.sort((a,b) => a.localeCompare(b))
      listPlayers();
  } else {
      console.log(`Didn't Sort`)
  }
}

document.querySelector('#sort1').onclick = () => {
  if (playersArray.length >= 2){
      playersArray.sort((b,a) => a.localeCompare(b))
      listPlayers();
  } else {
      console.log(`Didn't Sort`)
  }
}

getPlayers().then(data => players = data);

let clickEvent = document.querySelectorAll("button")

clickEvent.forEach(button =>{
  button.addEventListener('click', playerInfo)
})

function playerInfo(event) {
  let playerChoice = players.api.players.find(player =>{
    return event.target.id === player.firstName.toLowerCase();
  })
  console.log(playerChoice)
  document.querySelector('#name').textContent = `${playerChoice.firstName} ${playerChoice.lastName}`
  document.querySelector('#position').textContent = `${playerChoice.leagues.standard.pos}`
  document.querySelector('#jersey').textContent = `${playerChoice.leagues.standard.jersey}`
  document.querySelector('#height').textContent = `${playerChoice.heightInMeters}` *3.28
  document.querySelector('#weight').textContent = Math.round(`${playerChoice.weightInKilograms}` *2.2)
  document.querySelector('#entered').textContent = `${playerChoice.startNba}`
  document.querySelector('#years').textContent = `${playerChoice.yearsPro}`
  document.querySelector('#college').textContent = `${playerChoice.collegeName}`
  document.querySelector('#country').textContent = `${playerChoice.country}`
  document.querySelector('#dob').textContent = `${playerChoice.dateOfBirth}`
}

const question = {
  stem: "Who is the Utah Jazz all-time 3 point leader?",
  option1: "John Stockton",
  option2: "Joe Ingles",
  option3: "Gordon Hayward",
  option4: "Donovan Mitchell",
  correct: 2,
  display: () => {
    document.querySelector('#stem').textContent = question.stem;
    document.querySelector('#answer1').textContent = question.option1;
    document.querySelector('#answer2').textContent = question.option2;
    document.querySelector('#answer3').textContent = question.option3;
    document.querySelector('#answer4').textContent = question.option4;
  },
  check: (userChoice) => {
    if(userChoice === question.correct){
      document.querySelector('.feedback').textContent = "Congrats! You are correct!"
    }else{
      document.querySelector('.feedback').textContent = "Incorrect! Please try again."
    }
  }
}

document.querySelector('#answer1').addEventListener('click', () => question.check(1))
document.querySelector('#answer2').addEventListener('click', () => question.check(2))
document.querySelector('#answer3').addEventListener('click', () => question.check(3))
document.querySelector('#answer4').addEventListener('click', () => question.check(4))

question.display();




