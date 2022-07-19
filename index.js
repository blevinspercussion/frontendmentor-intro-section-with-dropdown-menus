/////////// Get DOM elements ////////////////
const features = document.getElementById("features");
const company = document.getElementById("company");
const careers = document.getElementById("careers");
const about = document.getElementById("about");


const login = document.getElementById("login");
const register = document.getElementById("register");

const featuresArrow = document.getElementsByClassName("features-arrow");
const companyArrow = document.getElementsByClassName("company-arrow");

// const featuresArrow = document.getElementById('features-arrow');
// const companyArrow = document.getElementById('company-arrow');

// For mobile sidenav menu
const hamburgerIcon = document.getElementById("hamburger-icon");
const sidenav = document.getElementById("side-nav");
const sidenavCloseIcon = document.getElementById("close-menu-icon");
const sidenavFeatures = document.getElementById("sidenav-features");
const sidenavCompany = document.getElementById("sidenav-company");

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
const todoListIcon = document.createElement("img");
const todoList = document.createElement("li");
const calendarIcon = document.createElement("img");
const calendar = document.createElement("li");
const remindersIcon = document.createElement("img");
const reminders = document.createElement("li");
const planningIcon = document.createElement("img");
const planning = document.createElement("li");


// Add src and class to images 
todoListIcon.src = "img/icon-todo.svg";
calendarIcon.src = "img/icon-calendar.svg";
remindersIcon.src = "img/icon-reminders.svg";
planningIcon.src = "img/icon-planning.svg";

todoListIcon.classList.add('menu-icon');
calendarIcon.classList.add('menu-icon');
remindersIcon.classList.add('menu-icon');
planningIcon.classList.add('menu-icon');


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

// Add images
todoList.appendChild(todoListIcon);
calendar.appendChild(calendarIcon);
reminders.appendChild(remindersIcon);
planning.appendChild(planningIcon);

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
    for (let i=0; i<featuresArrow.length; i++) {
        featuresArrow[i].src = "./img/icon-arrow-up.svg";
    }
    features.appendChild(featuresMenuDiv);
});

featuresMenuDiv.addEventListener('mouseleave', () => {
if (features.children.length > 1) {
    for (let i=0; i<featuresArrow.length; i++) {
        featuresArrow[i].src = "./img/icon-arrow-down.svg";
    }
    features.removeChild(featuresMenuDiv);
}
});

company.addEventListener('mouseenter', () => {
    for (let i=0; i<companyArrow.length; i++) {
        companyArrow[i].src = "./img/icon-arrow-up.svg";
    }
    company.appendChild(companyMenuDiv);
});

companyMenuDiv.addEventListener('mouseleave', () => {
    for (let i=0; i<companyArrow.length; i++) {
        companyArrow[i].src = "./img/icon-arrow-down.svg";
    }
    company.removeChild(companyMenuDiv);
});

// Listeners for mobile
hamburgerIcon.addEventListener('click', () => {
    console.log('clicked');
})