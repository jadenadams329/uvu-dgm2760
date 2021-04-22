
document.querySelector('#company').innerHTML = "Hotel California";

document.querySelector('header > h2').innerText = "You can never leave";

document.querySelector('#pageTitle').innerHTML = "Hotel California";

async function getHotelData(){

  try{
    const response = await fetch('./hotel.json')
    return await response.json();

  } catch (error){
    console.error(error)
  }
}

let hotelData = {};
getHotelData().then(data => hotelData = data)

let clickEvent = document.querySelectorAll("a")

clickEvent.forEach(button =>{
  button.addEventListener('click', hotelInfo)
})


function hotelInfo(event) {
  let hotelChoice = hotelData.hotels.find(hotel =>{
    return event.target.id === hotel.name.toLowerCase()
  })
  console.log(hotelChoice)

  document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`
  document.querySelector('#address').textContent = `${hotelChoice.address}`
  document.querySelector('#rooms').textContent = `${hotelChoice.rooms}`
  document.querySelector('#gym').textContent = `${hotelChoice.gyms}`
  document.querySelector('#type').textContent = `${hotelChoice.roomTypes[0]}, ${hotelChoice.roomTypes[1]}, ${hotelChoice.roomTypes[2]}`
  document.querySelector('#picture').setAttribute('src', `images/${hotelChoice.picture}`)
}


