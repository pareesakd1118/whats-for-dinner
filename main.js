//ARRAYS WITH FOOD ITEMS:

var sides = ['Mashed Potatoes', 'Mac and Cheese', 'French Fries']

var desserts = ['Cake', 'Brownies', 'Pie']

var mains = ['Steak', 'Chicken', 'Pork Roast']

//HTML ELEMENTS:

var box2 = document.querySelector('.box2')
var side = document.querySelector('#side')
var main = document.querySelector('#main')
var dessert = document.querySelector('#dessert')
var blueButton = document.querySelector('.blue-button')

//EVENT LISTENERS:

blueButton.addEventListener('click', chooseFood)

//FUNCTIONS: 

//this function generates a random number
function getRandomInt(array) {
    return Math.floor(Math.random() * (array.length));
  }

//this function displays random food item 
function chooseFood() {
  if (main.checked) {
    box2.innerHTML = `<div class="dish"> 
                        <i>You should make:</i> 
                        <p class="dish-name">${mains[getRandomInt(mains)]}!</p>
                        <button class="clear">CLEAR</button>
                     </div>`
  }
  if (side.checked) {
    box2.innerHTML = `<div class="dish"> 
                        <i>You should make:</i> 
                        <p class="dish-name">${sides[getRandomInt(sides)]}!</p>
                        <button class="clear">CLEAR</button>
                     </div>`
  }
  if (dessert.checked) {
    box2.innerHTML = `<div class="dish"> 
                        <i>You should make:</i> 
                        <p class="dish-name">${desserts[getRandomInt(desserts)]}!</p>
                        <button class="clear">CLEAR</button>
                     </div>`
  }
}


