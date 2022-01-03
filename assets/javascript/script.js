// Creates constant variables for the hamburger and nav-menu CSS classes
const hamburger = document.querySelector('.hamburger');
console.log(hamburger);
const navMenu = document.querySelector('.nav-menu');

//Listens for the menu to be clicked and toggles the active .class
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})
//Removes the .active class when an item is selected from the nav menu or the hamburger is clicked again
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))