let burger = document.querySelector(".burger-nav-menu") 

let button = document.querySelector(".nav-open");

button.addEventListener("click", () => {
    burger.classList.toggle('opened')
});
