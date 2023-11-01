const counterValue = document.querySelector("#counter");
const decValue = document.querySelector("#dec");
const incValue = document.querySelector("#inc");

const decrement = () => {
    // Get value from UI 
    let value = parseInt(counterValue.innerText);
    // Update value 
    value -= 1;
    // Set value onto UI
    counterValue.innerText = value;
}

// Use "click" instead of "onclick" for event listeners
decValue.addEventListener("click", decrement);

const increment = () => {
    // Get value from UI 
    let value = parseInt(counterValue.innerText);
    // Update value 
    value += 1;
    // Set value onto UI
    counterValue.innerText = value;
}

// Use "click" instead of "onclick" for event listeners
incValue.addEventListener("click", increment);
