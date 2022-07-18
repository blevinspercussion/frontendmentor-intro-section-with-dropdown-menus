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

featuresMenuDiv.classList.add('sub-menu');
featuresMenuDiv.classList.add('features');
companyMenuDiv.classList.add('sub-menu');
companyMenuDiv.classList.add('company');


// Create items for featuresMenu
const todoList = document.createElement("li");
const todoListIcon = document.createElement("img");
const calendar = document.createElement("li");
const calendarIcon = document.createElement("img");
const reminders = document.createElement("li");
const remindersIcon = document.createElement("img");
const planning = document.createElement("li");
const planningIcon = document.createElement("img");

// Create items for companyMenu
const history = document.createElement("li");
const ourTeam = document.createElement("li");
const blog = document.createElement("li");

// Add text to list items
todoList.textContent = "Todo List";
calendar.textContent = "Calendar";
reminders.textContent = "Reminders";
planning.textContent = "Planning";

history.textContent = "History";
ourTeam.textContent = "Our Team";
blog.textContent = "Blog";


// Construct menus
featuresMenuDiv.appendChild(todoList);
featuresMenuDiv.appendChild(calendar);
featuresMenuDiv.appendChild(reminders);
featuresMenuDiv.appendChild(planning);

companyMenuDiv.appendChild(history);
companyMenuDiv.appendChild(ourTeam);
companyMenuDiv.appendChild(blog);






// Add event listeners 
features.addEventListener('mouseenter', () => {
    features.appendChild(featuresMenuDiv);
});

features.addEventListener('mouseleave', () => {
    features.removeChild(featuresMenuDiv);
});

company.addEventListener('mouseenter', () => {
    company.appendChild(companyMenuDiv);
});

company.addEventListener('mouseleave', () => {
    company.removeChild(companyMenuDiv);
})




// Append items