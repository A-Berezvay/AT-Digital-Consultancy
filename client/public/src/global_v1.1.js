document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    /* === HEADER FUNCTIONALITIES AND LOGIC */

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

    /*
    A function that toggles the "show-menu" class in CSS. 
    Anytime the Burger icon is being clicked the Menu appear and the
    Icon changes from Burger to Close Icon
    */
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

    navToggle.addEventListener('click', toggleMenu); //Calling the function to excecute on click event.

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
  
    // A function that displays the drop down menus
    function toggleDropdown(dropdownMenu) {
        if (window.innerWidth < 1118) {
            if (dropdownMenu.style.display === 'none') {
                dropdownMenu.style.display = 'block';
                console.log('Dropdown menu open');
            } else {
                dropdownMenu.style.display = 'none';
                console.log('Dropdown menu closed');
            }
        } 
    }

    webDevNavLink.addEventListener('click', () => toggleDropdown(dropdownMenuWebDev));
    softwareNavLink.addEventListener('click', () => toggleDropdown(dropdownMenuSoftware));
    marketingNavLink.addEventListener('click', () => toggleDropdown(dropdownMenuMarketing));

});