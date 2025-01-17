//ARRAYS WITH FOOD ITEMS:
var sides = ['Mashed Potatoes', 'Mac and Cheese', 'French Fries', 'Tater Tots', 'Salad', 'Soup', 'Calamari']

var desserts = ['Chocolate Cake', 'Brownies', 'Apple Pie', 'Ice-cream', 'Key Lime Pie', 'Cheesecake', 'Banana Pudding', 'Tiramisu']

var mains = ['Steak', 'Chicken', 'Pork Roast', 'Salmon', 'Spaghetti', 'Kabob', 'Tilapia', 'Veggie Stirfry', 'Scallops']

var favoriteFoods = []

//HTML ELEMENTS:
var box2 = document.querySelector('.box2')
var side = document.querySelector('#side')
var main = document.querySelector('#main')
var dessert = document.querySelector('#dessert')
var entireMeal = document.querySelector('#entire-meal')
var blueButton = document.querySelector('.blue-button')
var recipeButton = document.querySelector('#recipe')
var imageContainer = document.querySelector('.image-container')
var recipeForm = document.querySelector('.form')
var recipeType = document.querySelector('#rType')
var recipeName = document.querySelector('#rName')
var submitButton = document.querySelector('#submit')

//EVENT LISTENERS:
blueButton.addEventListener('click', chooseFood)
recipeButton.addEventListener('click', function() {switchView(recipeForm, imageContainer)})
submitButton.addEventListener('click', addRecipe)

//FUNCTIONS: 

//this function generates a random number
function getRandomInt(array) {
    return Math.floor(Math.random() * (array.length));
  }

//this function displays random food item, and declares clear button as a variable and adds event listener to clear button 
function chooseFood() {
  if (entireMeal.checked) {
    box2.innerHTML = `<div class="dish"> 
                        <i>You should make:</i> 
                        <p class="dish-name">${mains[getRandomInt(mains)]} with a side of ${sides[getRandomInt(sides)]} and ${desserts[getRandomInt(desserts)]} for dessert!</p>
                        <button class="clear">CLEAR</button>
                        <button class="favorite">FAVORITE</button>  
                    </div>`
      }
  else if (main.checked) {
    box2.innerHTML = `<div class="dish"> 
                        <i>You should make:</i> 
                        <p class="dish-name">${mains[getRandomInt(mains)]}!</p>  
                        <button class="clear">CLEAR</button>
                        <button class="favorite">FAVORITE</button>                     
                     </div>`
  }
  else if (side.checked) {
    box2.innerHTML = `<div class="dish"> 
                        <i>You should make:</i> 
                        <p class="dish-name">${sides[getRandomInt(sides)]}!</p>
                        <button class="clear">CLEAR</button>
                        <button class="favorite">FAVORITE</button> 
                     </div>`
  }
  else if (dessert.checked) {
    box2.innerHTML = `<div class="dish"> 
                        <i>You should make:</i> 
                        <p class="dish-name">${desserts[getRandomInt(desserts)]}!</p>
                        <button class="clear">CLEAR</button>
                        <button class="favorite">FAVORITE</button> 
                     </div>`
  } else {
    box2.innerHTML = `<div class="dish"> 
                        <p class="dish-name">Oops! No meal category selected.</p>
                        <button class="clear">CLEAR</button>
                     </div>`
  }

  var clearButton = document.querySelector('.clear')
  clearButton.addEventListener('click', returnPotImage)
  var favoriteButton = document.querySelector('.favorite')
  favoriteButton.addEventListener('click', addToFavorites)
}

//this function brings back pot image to box 2
function returnPotImage() {
  box2.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" class="pot">
                        <path d="M84.883 42.8h-1.346v-4.504a1 1 0 00-1-1H17.713a1 1 0 00-1 1V42.8h-1.346c-2.891 0-5.242 2.352-5.242 5.242s2.352 5.242 5.242 5.242h1.346v32.874a4.003 4.003 0 003.998 3.998h58.828a4.003 4.003 0 003.998-3.998V53.284h1.346c2.891 0 5.242-2.352 5.242-5.242S87.773 42.8 84.883 42.8zm-21.594-3.504h5.172v10.845c0 1.426-1.16 2.585-2.586 2.585s-2.586-1.159-2.586-2.585V39.296zm-12.403 0h5.171v16.618c0 1.426-1.16 2.586-2.586 2.586s-2.585-1.16-2.585-2.586V39.296zM15.367 51.284c-1.788 0-3.242-1.454-3.242-3.242s1.454-3.242 3.242-3.242h1.346v6.484h-1.346zm66.17 34.874a2 2 0 01-1.998 1.998H20.711a2 2 0 01-1.998-1.998V39.296h30.173v16.618c0 2.528 2.057 4.586 4.585 4.586s4.586-2.058 4.586-4.586V39.296h3.232v10.845c0 2.528 2.058 4.585 4.586 4.585s4.586-2.057 4.586-4.585V39.296h11.076v46.862zm3.346-34.874h-1.346V44.8h1.346c1.788 0 3.242 1.454 3.242 3.242s-1.454 3.242-3.242 3.242zM19.33 22.125a5.55 5.55 0 00-4.898 6.121l.426 3.842a1 1 0 001.104.884l67.588-7.498a1 1 0 00.884-1.104l-.427-3.842a5.506 5.506 0 00-2.046-3.717 5.52 5.52 0 00-4.075-1.182L54.799 18.19l-.229-2.06.406-.045a1 1 0 00.884-1.104l-.454-4.09a.999.999 0 00-1.104-.884l-14.064 1.561a1 1 0 00-.884 1.104l.454 4.09a1 1 0 001.104.884l.442-.049.228 2.06-22.252 2.468zm58.776-4.508a3.517 3.517 0 012.604.755 3.522 3.522 0 011.308 2.376l.316 2.848-65.6 7.277-.315-2.848a3.546 3.546 0 013.131-3.912l58.556-6.496zm-24.578-5.512l.233 2.102-12.076 1.34-.233-2.102 12.076-1.34zm-10.185 5.271l9.239-1.025.229 2.06-9.239 1.025-.229-2.06z"/>
                    </svg>`                   
}

//this function hides one page and shows another
function switchView(show, hide) {
  show.classList.remove('hidden')
  hide.classList.add('hidden')
}

//adds new food to array and puts it on the front page
function addRecipe(event) {
    event.preventDefault();
  if (recipeType.value == 'sides') {
        sides.push(recipeName.value)
    }
  if (recipeType.value == 'mains') {
        mains.push(recipeName.value)
    }
  if (recipeType.value == 'desserts') {
        desserts.push(recipeName.value)
    } 
  
  box2.innerHTML = `<div class="dish"> 
                        <i>You should make:</i> 
                        <p class="dish-name">${recipeName.value}!</p>
                        <button class="clear">CLEAR</button>
                        <button class="favorite">FAVORITE</button> 
                     </div>`

  switchView(imageContainer, recipeForm)

  var clearButton = document.querySelector('.clear')
  clearButton.addEventListener('click', returnPotImage)
  var favoriteButton = document.querySelector('.favorite')
  favoriteButton.addEventListener('click', addToFavorites)
}

//adds recipe to favorites 
function addToFavorites() {
  var dishName = document.querySelector('.dish-name')
  if (!favoriteFoods.includes(dishName.innerText)){
  favoriteFoods.push(dishName.innerText)
  }
}

