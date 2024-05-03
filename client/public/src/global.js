/* === HEADER NAVIGATION === */


const header = document.querySelector('header');
const serviceBtn = document.getElementById('servicesLink');
const dropdownMenu = document.getElementById('servicesDropdown');


function showDropdown() {
    dropdownMenu.style.display = 'block';
}

function hideDropdown() {
    dropdownMenu.style.display = 'none';
}

function toggleHeaderBackground() {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', toggleHeaderBackground);

serviceBtn.addEventListener('mouseenter', showDropdown);

dropdownMenu.addEventListener('mouseenter', showDropdown);

serviceBtn.addEventListener('mouseleave', hideDropdown);
dropdownMenu.addEventListener('mouseleave', hideDropdown);

   //RESPONSIVE NAVIGATION

const servicesPlusIcon = document.getElementById('services-plus-icon');
const servicesMinusIcon = document.getElementById('services-minus-icon');
const aboutPlusIcon = document.getElementById('about-plus-icon');

const menuIcon = document.getElementById('menu-bars');
const menuCloseIcon = document.getElementById('menu-close');
const mainMenu = document.getElementById('mainMenu');
let isMenuOpen = false;

servicesMinusIcon.style.display = 'none';

function updateEventListeners() {
    const isMobile = window.matchMedia('(max-width: 1280px)').matches;

    if (isMobile) {
        serviceBtn.removeEventListener('mouseenter', showDropdown);
        serviceBtn.removeEventListener('mouseleave', hideDropdown);
        dropdownMenu.removeEventListener('mouseenter', showDropdown);
        dropdownMenu.removeEventListener('mouseleave', hideDropdown);

        dropdownMenu.style.display = 'none';

        console.log("The screen is under 1280px wide.");
        menuIcon.addEventListener('click', function() {
            mainMenu.style.display = 'block';
            menuCloseIcon.style.display = 'block';
            menuIcon.style.display = 'none';
        })

        menuCloseIcon.addEventListener('click', function() {
            mainMenu.style.display = 'none';
            menuIcon.style.display = 'block';
            menuCloseIcon.style.display = 'none';
            })

        serviceBtn.addEventListener('click', function(event) {
            event.preventDefault();
            if (dropdownMenu.style.display === 'none') {
                dropdownMenu.style.display = 'block';
                servicesPlusIcon.style.display = 'none';
                servicesMinusIcon.style.display = 'block';
            } else {
                dropdownMenu.style.display = 'none';
                servicesPlusIcon.style.display = 'block';
                servicesMinusIcon.style.display = 'none';
            }
        });

    } else {
        serviceBtn.onclick = null;
        servicesPlusIcon.style.display = 'none';
        aboutPlusIcon.style.display = 'none';

        menuCloseIcon.style.display = 'none';
        menuIcon.style.display = 'none';
    
        console.log("The screen is wider than 1280px.");

        serviceBtn.addEventListener('mouseenter', showDropdown);
        serviceBtn.addEventListener('mouseleave', hideDropdown);
        dropdownMenu.addEventListener('mouseenter', showDropdown);
        dropdownMenu.addEventListener('mouseleave', hideDropdown);
    }
}

updateEventListeners();

window.addEventListener('resize', updateEventListeners);

/* === CONTACT FORM === */

const scriptURL = 'https://script.google.com/macros/s/AKfycbwQO0F6wiLj5AnOp8Ka1z2q9dI1zqwukCrhENTVXKOF3zTSxBVTLiqJ7Gp33hbuI7R0aA/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! Your message is submitted succesfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})





