const conversions = {
    length: {
        meters: 1,
        kilometers: 0.001,
        miles: 0.000621371,
        feet: 3.28084,
        inches: 39.3701
    },
    mass: {
        kilograms: 1,
        grams: 1000,
        pounds: 2.20462,
        ounces: 35.274
    },
    angle: {
        degrees: 1,
        radians: 0.0174533
    },
    // Add other categories and their units
    volume: {
        liters: 1,
        milliliters: 1000,
        cubic_meters: 0.001,
        cubic_centimeters: 1000000,
        cubic_inches: 61023.7,
        gallons: 0.264172
    },
    area: {
        square_meters: 1,
        square_kilometers: 0.000001,
        hectares: 0.0001,
        square_miles: 0.000000386102,
        square_feet: 10.7639,
        square_inches: 1550
    },
    time: {
        seconds: 1,
        minutes: 1/60,
        hours: 1/3600,
        days: 1/86400,
        weeks: 1/604800,
        years: 1/31536000
    }
};


document.addEventListener("DOMContentLoaded", function() {
    clearInputs();
    updateUnits(); // Initialize units and any other onload setup
});
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.bx-menu');
    const navLinks = document.querySelector('.navbar .nav-links');

    menuButton.addEventListener('click', function() {
        // Toggle a class that controls the visibility of the nav-links
        navLinks.classList.toggle('active');
    });
});

function clearInputs() {
    // Clear all input type="number" fields
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.value = ''; // Reset input fields to empty
    });
}

function updateUnits() {
    let category = document.getElementById('category').value;
    let unitFrom = document.getElementById('unitFrom');
    let unitTo = document.getElementById('unitTo');
    unitFrom.innerHTML = '';
    unitTo.innerHTML = '';
    // Assuming you have predefined conversions object
    for (let unit in conversions[category]) {
        let optionFrom = document.createElement('option');
        optionFrom.value = unit;
        optionFrom.textContent = unit;
        unitFrom.appendChild(optionFrom);
        let optionTo = document.createElement('option');
        optionTo.value = unit;
        optionTo.textContent = unit;
        unitTo.appendChild(optionTo);
    }
}

function convert() {
    let fromUnit = document.getElementById('unitFrom').value;
    let toUnit = document.getElementById('unitTo').value;
    let input = parseFloat(document.getElementById('inputValue').value);
    let category = document.getElementById('category').value;
    let result = input * (conversions[category][fromUnit] / conversions[category][toUnit]);
    document.getElementById('outputValue').value = result.toFixed(5);
}
// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
// Sidebar open/close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");

menuOpenBtn.onclick = function() {
    navLinks.style.left = "0";  // Opens the sidebar
};

menuCloseBtn.onclick = function() {
    navLinks.style.left = "-100%";  // Closes the sidebar
};

// Sidebar submenu open/close js code
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

