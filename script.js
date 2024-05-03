document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded and DOM fully loaded.");
    var display = document.getElementById("inputBox");
    var buttons = document.getElementsByClassName("button");
    var resultDisplayed = false;  // Indicates if the result of a calculation is displayed
    var lastResult = 0;           // Stores the last calculated result (initially zero)

    Array.prototype.forEach.call(buttons, function(button) {
        button.addEventListener("click", function() {
            var buttonText = button.textContent.trim();  // Ensure there are no extra spaces
            console.log("Button clicked:", buttonText);  // Debugging: log which button was clicked

            // Clear display after a result has been shown, and a non-operator button is pressed
            if (resultDisplayed && !["+", "-", "*", "/", "Ans"].includes(buttonText)) {
                display.value = "";
                resultDisplayed = false;
            }

            // Function buttons prepare the display for input
            if (["sin", "cos", "tan", "sin⁻¹", "cos⁻¹", "tan⁻¹", "log"].includes(buttonText)) {
                display.value += buttonText + "(";
            } else {
                switch (buttonText) {
                    case '=':
                        calculateResult();
                        resultDisplayed = true;
                        break;
                    case 'AC':
                        clear();
                        break;
                    case 'DEL':
                        backspace();
                        break;
                    case 'Ans':
                        addToDisplay(lastResult.toString());
                        resultDisplayed = false;
                        break;
                    default:
                        addToDisplay(buttonText);
                }
            }
        });
    });

    function clear() {
        display.value = "";
        lastResult = 0;
        resultDisplayed = false;
        console.log("Display cleared"); // Debugging: log clearing action
    }

    function backspace() {
        display.value = display.value.substring(0, display.value.length - 1);
        console.log("Backspace used"); // Debugging: log backspace action
    }

    function addToDisplay(value) {
        display.value += value;
        console.log("Value added to display:", value); // Debugging: log value added to display
    }

    function calculateResult() {
        try {
            // Handle function calculation with input inside the parentheses
            let match = display.value.match(/([a-z⁻¹]+)\(([^)]+)\)/i);
            if (match) {
                let func = match[1];
                let arg = parseFloat(match[2]);
                let result;
                switch (func) {
                    case 'sin':
                        result = Math.sin(arg * Math.PI / 180);
                        break;
                    case 'cos':
                        result = Math.cos(arg * Math.PI / 180);
                        break;
                    case 'tan':
                        result = Math.tan(arg * Math.PI / 180);
                        break;
                    case 'sin⁻¹':
                        result = Math.asin(arg) * 180 / Math.PI;
                        break;
                    case 'cos⁻¹':
                        result = Math.acos(arg) * 180 / Math.PI;
                        break;
                    case 'tan⁻¹':
                        result = Math.atan(arg) * 180 / Math.PI;
                        break;
                    case 'log':
                        result = Math.log10(arg);
                        break;
                }
                display.value += "=" + result.toFixed(8);
                lastResult = result;
            } else {
                let result = eval(display.value);
                display.value = result;
                lastResult = result;
            }
        } catch (e) {
            display.value = "Error";
            console.error('Calculation error:', e); // Debugging: log calculation error
        }
        resultDisplayed = true;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.bx-menu');
    const navLinks = document.querySelector('.navbar .nav-links');

    menuButton.addEventListener('click', function() {
        // Toggle a class that controls the visibility of the nav-links
        navLinks.classList.toggle('active');
    });
});
// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

