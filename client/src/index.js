/* ===HEADER NAVIGATION=== */

const serviceBtn = document.getElementById('servicesLink');
const dropdownMenu = document.getElementById('servicesDropdown');

dropdownMenu.style.display = 'none';

function showDropdown() {
    dropdownMenu.style.display = 'block';
}

function hideDropdown() {
    dropdownMenu.style.display = 'none';
}

serviceBtn.addEventListener('mouseenter', showDropdown);

dropdownMenu.addEventListener('mouseenter', showDropdown);

serviceBtn.addEventListener('mouseleave', hideDropdown);
dropdownMenu.addEventListener('mouseleave', hideDropdown);

   //RESPONSIVE NAVIGATION

function updateEventListeners() {
    const isMobile = window.matchMedia('(max-width: 1280px)').matches;

    if (isMobile) {
        serviceBtn.removeEventListener('mouseenter', showDropdown);
        serviceBtn.removeEventListener('mouseleave', hideDropdown);
        dropdownMenu.removeEventListener('mouseenter', showDropdown);
        dropdownMenu.removeEventListener('mouseleave', hideDropdown);

        serviceBtn.onclick = () => {
            const isDisplayed = dropdownMenu.style.display === 'block';
            dropdownMenu.style.display = isDisplayed ? 'none' : 'block';
        };
    } else {
        serviceBtn.onclick = null;

        serviceBtn.addEventListener('mouseenter', showDropdown);
        serviceBtn.addEventListener('mouseleave', hideDropdown);
        dropdownMenu.addEventListener('mouseenter', showDropdown);
        dropdownMenu.addEventListener('mouseleave', hideDropdown);
    }
}

updateEventListeners();

window.addEventListener('resize', updateEventListeners);

const menuIcon = document.getElementById('menu-bars');
const menuCloseIcon = document.getElementById('menu-close');
const plusIcon = document.getElementsByClassName('fa-plus');
const mainMenu = document.getElementById('mainMenu');
let isMenuOpen = false;

if (window.matchMedia('(max-width: 1280px)').matches) {
    // Code to execute when the viewport width is less than or equal to 1280 pixels
    console.log("The screen is under 1280px wide.");
    menuIcon.addEventListener('click', function() {
        mainMenu.style.display = 'block';
        menuCloseIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    });


    menuCloseIcon.addEventListener('click', function() {
    mainMenu.style.display = 'none';
    menuIcon.style.display = 'block';
    menuCloseIcon.style.display = 'none';
    });
} else {
    // Code to execute when the viewport width is greater than 1280 pixels
    menuCloseIcon.style.display = 'none';
    menuIcon.style.display = 'none';

    console.log("The screen is wider than 1280px.");
}






