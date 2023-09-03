// Challenge 1: Modify the code to decrement the value of the associated h1 element by 1 when the button is clicked.

// Link the Counter Box elements to the JS
const counterBoxes = document.getElementsByClassName('counter-box');
// Convert counterBoxes into an array using spread operator 
const counterBoxesArray = [...counterBoxes];
// Loop over the Counter Box divs, targeting each of the h1 and button elements
counterBoxesArray.forEach((counterBox) => {
    // Selects the h1 element and its textContent in the current Counter Box
    const h1Element = counterBox.querySelector('h1');
    let currentValue = parseInt(h1Element.textContent);
    // Selects the button element in the current Counter Box
    const buttonElement = counterBox.querySelector('button');

    // Assigns an event listener that looks for clicks on the button inside each Counter Box
    buttonElement.addEventListener("click", function() {
        // Selects the button within the focused container
        buttonText = this.textContent;
        // Reduces the value of the h1 in the focused container
        currentValue--
        // Updates the value of the h1 in the focused container
        h1Element.textContent = currentValue;
        console.log(`${buttonText}` + " was clicked! ")
    });
});


// Challenge 2: Modify the code so that you can increment or decrement the counter based on which button is being pressed and add a button to reset the counters.

// Link the Counter Box elements to the JS
const counterBoxes = document.getElementsByClassName('counter-box');

// Link the Reset button to the JS
const resetButton = document.getElementById("reset-el")

// Convert counterBoxes into an array using spread operator 
const counterBoxesArray = [...counterBoxes];

// Loop over the Counter Box divs, targeting each of the h1 and button elements
counterBoxesArray.forEach((counterBox) => {
    // Selects the h1 element and its textContent in the current Counter Box
    const h1Element = counterBox.querySelector('h1');
    const h2Element = counterBox.querySelector('h2');
    let currentValue = parseInt(h1Element.textContent);
    // Selects the button elements in the current Counter Box
    const buttons = counterBox.querySelectorAll('button');

    // Assigns event listeners to each button inside the Counter Box
    buttons.forEach((button) => {
        button.addEventListener("click", function() {
            // Checks if the button text content is "⬆️"
            if (button.textContent === "⬆️") {
                currentValue++;
                // Updates the text content of the associated h1 element with the incremented value
                h1Element.textContent = currentValue;
                // Logs a message indicating the button that was pressed and the associated h2 element's text content
                console.log(`You pressed ${this.textContent} on ${h2Element.textContent}!`);
            } 
            // Checks if the button text content is "⬇️"
            else if (button.textContent === "⬇️") {
                currentValue--;
                // Updates the text content of the associated h1 element with the decremented value
                h1Element.textContent = currentValue;
                // Logs a message indicating the button that was pressed and the associated h2 element's text content
                console.log(`You pressed ${this.textContent} on ${h2Element.textContent}!`);
            }
        });
    });

    resetButton.addEventListener("click", function() {
        h1Element.textContent = 0;
    })
});
