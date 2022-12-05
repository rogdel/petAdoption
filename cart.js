"use strict";

/*
Functions used: setupCart(), addItem(e), removeItem()

CSS formatting is located in style.css

Aside and additional formatting located in aviliablePets.html
*/

// Add an event listener that runs the setupCart()
window.addEventListener("load", setupCart);

// Create the setupcart() function. 
function setupCart() {

// Create a variable named addbuttons, bringing the elements from the addButton.
var addButtons = document.getElementsByClassName("addButton");

//RemoveItem() function extra feature to allow the removal of pets. Used to assist customer in analysing their cart.
var removeCartItemButtons = document.getElementsByClassName('button-d')
console.log(removeCartItemButtons)
for <var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click'), function(event)
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove(
        updateCartTotal()
    })
}

//addItem() function when the button is clicked.
for (let i = 0; i < addButtons.length; i++) {
    const e = addButtons[i];
    e.addEventListener("click", function () {
    addPet(e);
    });
    }
    }
    