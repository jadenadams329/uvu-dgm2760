
document.querySelector('#company').innerHTML = "Fortune Teller";

document.querySelector('header > h2').innerText = "Switch Statements";

document.querySelector('#pageTitle').innerHTML = "Fortune Teller";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  let month = getRandomIntInclusive(1,12);
  let fate = getRandomIntInclusive(1,5);
  let day = getRandomIntInclusive(1,30);

  function getMonthName(month){
      let name
      switch (month) {
        case 1:
            name = "January"
            break;
        case 2:
            name = "February"
            break;
        case 3:
            name = "March"
            break;
        case 4:
            name = "April"
            break;
        case 5:
            name= "May"
            break;
        case 6:
            name = "June"
            break;
        case 7:
            name = "July"
            break;
        case 8:
            name = "August"
            break;
        case 9:
            name ="September"
            break;
        case 10:
            name = "October"
            break;
        case 11:
            name ="November"
            break;
        case 12:
            name = "December"
            break;
      }
      return name;

  } 

  function getMyFortune(fate){
      let message
      switch (fate) {
        case 1:
            message = "have a perfect knowledge of things to come"  
            break;
        case 2:
            message = "win the lottery and donate your earnings to someone in need"
            break;
        case 3:
            message = "buy your favorite car and your wife will not get mad at you for doing so"
            break;
        case 4:
            message = "find out your long lost uncle left you his mansion on the condition that you let people rent out rooms for free"
            break;
        case 5:
            message = "find out your student loans have been forgiven"
            break;
      }
      return message;
  }

  function fortuneButton(){
    const monthName = getMonthName(month);
    const fateMessage = getMyFortune(fate);
  
    const fortuneRevealed = `On ${monthName} ${day}, you will ${fateMessage}`
  
    document.querySelector('#fortune').innerText = fortuneRevealed;
  }

  
