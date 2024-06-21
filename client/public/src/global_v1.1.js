document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const navToggle = document.getElementById('nav-toggle');
    const menuIcon = document.getElementById('navBurger');
    const menuCloseIcon = document.getElementById('navClose');
    const navMenu = document.getElementById('nav-menu');
    const webDevNavLink = document.getElementById('webdev-navlink');
    const softwareNavLink = document.getElementById('software-navlink');
    const marketingNavLink = document.getElementById('marketing-navlink');
    const dropdownMenuWebDev = document.getElementById('dropdown-display-webdev');
    const dropdownMenuSoftware = document.getElementById('dropdown-display-software');
    const dropdownMenuMarketing = document.getElementById('dropdown-display-marketing');

    console.log("Elements:", { menuIcon, menuCloseIcon, navMenu, navToggle, webDevNavLink, softwareNavLink, dropdownMenuWebDev, dropdownMenuSoftware, dropdownMenuMarketing });

    menuCloseIcon.style.display = 'none'; // Initial display of Close icon

    function toggleMenu() {
        if (navMenu.classList.contains('show-menu')) {
            navMenu.classList.remove('show-menu');
            menuCloseIcon.style.display = 'none';
            menuIcon.style.display = 'block';
            console.log('Close Icon clicked');
        } else {
            navMenu.classList.add('show-menu');
            menuCloseIcon.style.display = 'block';
            menuIcon.style.display = 'none';
            console.log('Menu Icon clicked');
        }
    }

    navToggle.addEventListener('click', toggleMenu);

    function setInitialDropdownDisplay() {
        if (window.innerWidth < 1118) {
            dropdownMenuWebDev.style.display = 'none';
            dropdownMenuSoftware.style.display = 'none';
            dropdownMenuMarketing.style.display = 'none';
        } else {
            dropdownMenuWebDev.style.display = 'block';
            dropdownMenuSoftware.style.display = 'block';
            dropdownMenuMarketing.style.display = 'block';
        }
    }

    setInitialDropdownDisplay();
    window.addEventListener('resize', setInitialDropdownDisplay);

    function toggleDropdown(dropdownMenu) {
        if (dropdownMenu.style.display === 'none') {
            dropdownMenu.style.display = 'block';
        } else {
            dropdownMenu.style.display = 'none';
        }
    }

    webDevNavLink.addEventListener('click', () => toggleDropdown(dropdownMenuWebDev));
    softwareNavLink.addEventListener('click', () => toggleDropdown(dropdownMenuSoftware));
    marketingNavLink.addEventListener('click', () => toggleDropdown(dropdownMenuMarketing));


});



/* === CONTACT FORM === 

const scriptURL = 'https://script.google.com/macros/s/AKfycbwQO0F6wiLj5AnOp8Ka1z2q9dI1zqwukCrhENTVXKOF3zTSxBVTLiqJ7Gp33hbuI7R0aA/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! Your message is submitted succesfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})

*/