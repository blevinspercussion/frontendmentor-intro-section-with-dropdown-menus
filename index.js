// Get DOM elements 
const features = document.getElementById("features");
const company = document.getElementById("company");
const careers = document.getElementById("careers");
const about = document.getElementById("about");

const login = document.getElementById("login");
const register = document.getElementById("register");

// Create submenus for navbar
const featuresMenuDiv = document.createElement("div");
const companyMenuDiv = document.createElement("div");

const featuresMenu = document.createElement("ul");
const companyMenu = document.createElement("ul");

// Create items for featuresMenu
const todoList = document.createElement("li");
const todoListIcon = document.createElement("img");
const calendar = document.createElement("li");
const calendarIcon = document.createElement("img");
const reminders = document.createElement("li");
const remindersIcon = document.createElement("img");
const planning = document.createElement("li");
const planningIcon = document.createElement("img");

// Add text to list items
todoList.textContent = "Todo List";
calendar.textContent = "Calendar";
reminders.textContent = "Reminders";
planning.textContent = "Planning";

// Create items for companyMenu
const history = document.createElement("li");
const outTeam = document.createElement("li");
const blog = document.createElement("li");

// Construct menus
featuresMenuDiv.appendChild(todoList);
featuresMenuDiv.appendChild(calendar);
featuresMenuDiv.appendChild(reminders);
featuresMenuDiv.appendChild(planning);




// Add event listeners 
features.addEventListener('mouseenter', () => {
    features.appendChild(featuresMenuDiv);
});

features.addEventListener('mouseleave', () => {
    features.removeChild(featuresMenuDiv);
})




// Append items