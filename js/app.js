// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

const direccion = 'https://jsonplaceholder.typicode.com';
const  xhr = new XMLHttpRequest();

function peticion() {
    if(this.readyState == 4 && this.status == 200){
        const data = JSON.parse(this.response);
       
        const HTMLResponse = document.querySelector("#appAPI");
        
        const template = data.map((user) => `<li>${user.name} ${user.email}</li>`);
        
        HTMLResponse.innerHTML = `<ul>${template}</ul>`;
    }
}

xhr.addEventListener('load', peticion);
xhr.open('GET', `${direccion}/users`);
xhr.send();