
document.querySelector('#company').innerHTML = "Pizza Emporium";

document.querySelector('header > h2').innerText = "Literal Objects";

document.querySelector('#pageTitle').innerHTML = "Pizza Order Form";

let message;

const pizza = {
  crust: 'thin',
  size: 'small',
  topping: 'pepperoni',

  buildPizza: function (){
    console.log('buildPizza method called')
    message = `Baking a ${pizza.size} pizza on a ${pizza.crust} crust with ${pizza.topping} and cheese just for you.`
    document.querySelector('#feedback').textContent = message
  },
  shoppingList: () => {
    let flour = 1
    if (pizza.crust === 'thick' || pizza.size === 'large') {
      flour *= 2;
    }
    message = `You need to purchase ${flour} cup(s) of flour and 1 lb of ${pizza.topping}.`
    document.querySelector('#feedback').textContent = message
    
  }

}

document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')
document.querySelector('#ham').addEventListener('click', () => pizza.topping = 'ham')

document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')

document.querySelector('#build').addEventListener('click', pizza.buildPizza)
document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)



