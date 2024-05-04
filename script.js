document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded and DOM fully loaded.");

    // Calculator setup
    var display = document.getElementById("inputBox");
    var buttons = document.getElementsByClassName("button");
    var resultDisplayed = false;  // Indicates if the result of a calculation is displayed
    var lastResult = 0;           // Stores the last calculated result (initially zero)

    Array.prototype.forEach.call(buttons, function(button) {
        button.addEventListener('click', function() {
            var buttonText = button.textContent.trim();  // Ensure there are no extra spaces
            console.log("Button clicked:", buttonText);  // Debugging: log which button was clicked

            if (resultDisplayed && !["+", "-", "*", "/", "Ans"].includes(buttonText)) {
                display.value = "";
                resultDisplayed = false;
            }

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

    // Menu button functionality
    const menuButton = document.querySelector('.bx-menu');
    const navLinks = document.querySelector('.navbar .nav-links');

    menuButton.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    let menuCloseBtn = document.querySelector(".nav-links .bx-x");
    menuCloseBtn.onclick = function() {
        navLinks.classList.remove('active');
    };

    let htmlcssArrow = document.querySelector(".htmlcss-arrow");
    htmlcssArrow.onclick = function() {
        navLinks.classList.toggle("show1");
    };

    let moreArrow = document.querySelector(".more-arrow");
    moreArrow.onclick = function() {
        navLinks.classList.toggle("show2");
    };

    let jsArrow = document.querySelector(".js-arrow");
    jsArrow.onclick = function() {
        navLinks.classList.toggle("show3");
    };

    // Utility functions for calculator
    function clear() {
        display.value = "";
        lastResult = 0;
        resultDisplayed = false;
        console.log("Display cleared");
    }

    function backspace() {
        display.value = display.value.substring(0, display.value.length - 1);
        console.log("Backspace used");
    }

    function addToDisplay(value) {
        display.value += value;
        console.log("Value added to display:", value);
    }

    function calculateResult() {
        try {
            let match = display.value.match(/([a-z⁻¹]+)\(([^)]+)\)/i);
            if (match) {
                let func = match[1];
                let arg = parseFloat(match[2]);
                let result = calculateFunctionResult(func, arg);
                display.value += "=" + result.toFixed(8);
                lastResult = result;
            } else {
                let result = eval(display.value);
                display.value = result;
                lastResult = result;
            }
        } catch (e) {
            display.value = "Error";
            console.error('Calculation error:', e);
        }
        resultDisplayed = true;
    }

    // Helper function to calculate results based on the function and argument
    function calculateFunctionResult(func, arg) {
        switch (func) {
            case 'sin': return Math.sin(arg * Math.PI / 180);
            case 'cos': return Math.cos(arg * Math.PI / 180);
            case 'tan': return Math.tan(arg * Math.PI / 180);
            case 'sin⁻¹': return Math.asin(arg) * 180 / Math.PI;
            case 'cos⁻¹': return Math.acos(arg) * 180 / Math.PI;
            case 'tan⁻¹': return Math.atan(arg) * 180 / Math.PI;
            case 'log': return Math.log10(arg);
            default: return null;
        }
    }
});
