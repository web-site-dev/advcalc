document.addEventListener("DOMContentLoaded", function() {
    initializeCalculator();
});
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.bx-menu');
    const navLinks = document.querySelector('.navbar .nav-links');

    menuButton.addEventListener('click', function() {
        // Toggle a class that controls the visibility of the nav-links
        navLinks.classList.toggle('active');
    });
});

function initializeCalculator() {
    const formContainer = document.getElementById('calculatorForm');
    if (!formContainer) return; // Exit if no form container is present

    const pageType = formContainer.dataset.type; // Read the calculator type from the data attribute
    switch (pageType) {
        case 'bmi':
            loadBMIForm(formContainer);
            break;
        case 'calorie':
            loadCalorieForm(formContainer);
            break;
        case 'bodyFat':
            loadBodyFatForm(formContainer);
            break;
        case 'bmr':
            loadBMRForm(formContainer);
            break;
        case 'idealWeight':
            loadIdealWeightForm(formContainer);
            break;
        case 'pace':
            loadPaceForm(formContainer);
            break;
        case 'pregnancy':
            loadPregnancyForm(formContainer);
            break;
        case 'conception':
            loadConceptionForm(formContainer);
            break;
    }
}

function loadBMIForm(container) {
    container.innerHTML =
     ` <label for="weight">Enter your weight:</label>
        <input type="number" id="weight" placeholder="Weight in kilograms">
        <label for="height">Enter your height:</label>
        <input type="number" id="height" placeholder="Height in meters">
        <button onclick="calculateBMI()">Calculate BMI</button>
        <p id="result"></p>
    `;
}

function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const result = weight / (height * height);
    document.getElementById('result').textContent = "Your BMI is: " + result.toFixed(2);
}

function loadCalorieForm(container) {
    container.innerHTML = `
    <label for="age">Enter your age:</label>
        <input type="number" id="age" placeholder="Age in years">
        <label for="gender">Select gender:</label>
        <select id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <label for="unitTo">Enter your weight:</label>
        <input type="number" id="weight" placeholder="Weight in kilograms">
        <label for="unitTo">Enter your height:</label>
        <input type="number" id="height" placeholder="Height in cm">
        <label for="unitTo">What type of exercise do you perform?</label>
        <select id="activityLevel">
            <option value="1.2">Sedentary</option>
            <option value="1.375">Lightly active</option>
            <option value="1.55">Moderately active</option>
            <option value="1.725">Very active</option>
            <option value="1.9">Extra active</option>
        </select>
        <button onclick="calculateCalories()">Calculate Daily Calories</button>
        <p id="calorieResult"></p>
    `;
}

function calculateCalories() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const activityLevel = document.getElementById('activityLevel').value;
    let bmr;

    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const calories = bmr * activityLevel;
    document.getElementById('calorieResult').textContent = "Your daily calorie needs: " + calories.toFixed(0);
}

function loadBodyFatForm(container) {
    container.innerHTML = `
    <label for="unitTo">Enter your waist circumference:</label>
        <input type="number" id="waist" placeholder="Waist circumference in cm">
        <label for="unitTo">Enter your hip circumference:</label>
        <input type="number" id="hip" placeholder="Hip circumference in cm">
        <label for="unitTo">Enter your neck circumference:</label>
        <input type="number" id="neck" placeholder="Neck circumference in cm">
        <label for="unitTo">Enter your height:</label>
        <input type="number" id="height" placeholder="Height in cm">
        <label for="unitTo">Select your gender:</label>
        <select id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <button onclick="calculateBodyFat()">Calculate Body Fat Percentage</button>
        <p id="bodyFatResult"></p>
    `;
}

function calculateBodyFat() {
    const waist = document.getElementById('waist').value;
    const hip = document.getElementById('hip').value;
    const neck = document.getElementById('neck').value;
    const height = document.getElementById('height').value;
    const gender = document.getElementById('gender').value;
    let bodyFatPercentage;

    if (gender === 'male') {
        bodyFatPercentage = (86.010 * Math.log10(waist - neck)) - (70.041 * Math.log10(height)) + 36.76;
    } else {
        bodyFatPercentage = (163.205 * Math.log10(waist + hip - neck)) - (97.684 * Math.log10(height)) - 78.387;
    }

    document.getElementById('bodyFatResult').textContent = "Your body fat percentage is: " + bodyFatPercentage.toFixed(2) + "%";
}

function loadBMRForm(container) {
    container.innerHTML = `
    <label for="unitTo">Enter your age:</label>
        <input type="number" id="age" placeholder="Age in years">
        <label for="unitTo">Select your gender:</label>
        <select id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <label for="unitTo">Enter your weight:</label>
        <input type="number" id="weight" placeholder="Weight in kilograms">
        <label for="unitTo">Enter your height:</label>
        <input type="number" id="height" placeholder="Height in cm">
        <button onclick="calculateBMR()">Calculate BMR</button>
        <p id="bmrResult"></p>
    `;
}

function calculateBMR() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    let bmr;

    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    document.getElementById('bmrResult').textContent = "Your Basal Metabolic Rate (BMR) is: " + bmr.toFixed(2) + " calories/day";
}

function loadIdealWeightForm(container) {
    container.innerHTML = 
    `<label for="unitTo">Select your gender:</label>
        <select id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <label for="unitTo">Enter your height:</label>
        <input type="number" id="height" placeholder="Height in cm">
        <button onclick="calculateIdealWeight()">Calculate Ideal Weight</button>
        <p id="idealWeightResult"></p>
    `;
}

function calculateIdealWeight() {
    const gender = document.getElementById('gender').value;
    const height = document.getElementById('height').value;
    let idealWeight;

    if (gender === 'male') {
        idealWeight = (height - 100) * 0.9;
    } else {
        idealWeight = (height - 100) * 0.85;
    }

    document.getElementById('idealWeightResult').textContent = "Your Ideal Weight is: " + idealWeight.toFixed(2) + " kilograms";
}

function loadPaceForm(container) {
    container.innerHTML = `
    <label for="unitTo">Enter distance you travelled:</label>
        <input type="number" id="distance" placeholder="Distance in kilometers">
        <label for="unitTo">Time of travel:</label>
        <input type="number" id="hours" placeholder="Hours">
        <input type="number" id="minutes" placeholder="Minutes">
        <input type="number" id="seconds" placeholder="Seconds">
        <button onclick="calculatePace()">Calculate Pace</button>
        <p id="paceResult"></p>
    `;
}

function calculatePace() {
    const distance = parseFloat(document.getElementById('distance').value);
    const hours = parseFloat(document.getElementById('hours').value);
    const minutes = parseFloat(document.getElementById('minutes').value);
    const seconds = parseFloat(document.getElementById('seconds').value);

    const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    const paceSeconds = totalSeconds / distance;

    const paceMinutes = Math.floor(paceSeconds / 60);
    const remainingSeconds = paceSeconds % 60;

    document.getElementById('paceResult').textContent = "Your pace is: " + paceMinutes.toFixed(0) + " minutes " + remainingSeconds.toFixed(0) + " seconds per kilometer";
}

function loadPregnancyForm(container) {
    container.innerHTML = `
    <label for="unitTo">Enter your last period date:</label>
        <input type="date" id="lastPeriodDate" placeholder="Last Menstrual Period Date">
        <button onclick="calculateDueDate()">Calculate Due Date</button>
        <p id="dueDateResult"></p>
    `;
}

function calculateDueDate() {
    const lastPeriodDate = new Date(document.getElementById('lastPeriodDate').value);
    const gestationPeriodInDays = 280; // Average gestation period is 280 days

    const dueDate = new Date(lastPeriodDate);
    dueDate.setDate(lastPeriodDate.getDate() + gestationPeriodInDays);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDueDate = dueDate.toLocaleDateString('en-US', options);

    document.getElementById('dueDateResult').textContent = "Your due date is: " + formattedDueDate;
}

function loadConceptionForm(container) {
    container.innerHTML = 
    `<label for="unitTo">Enter your delivery date:</label>
        <input type="date" id="dueDate" placeholder="Due Date">
        <button onclick="calculateConceptionDate()">Calculate Conception Date</button>
        <p id="conceptionDateResult"></p>
    `;
}

function calculateConceptionDate() {
    const dueDate = new Date(document.getElementById('dueDate').value);
    const gestationPeriodInDays = 280; // Average gestation period is 280 days

    const conceptionDate = new Date(dueDate);
    conceptionDate.setDate(dueDate.getDate() - gestationPeriodInDays);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedConceptionDate = conceptionDate.toLocaleDateString('en-US', options);

    document.getElementById('conceptionDateResult').textContent = "Your conception date is: " + formattedConceptionDate;
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
