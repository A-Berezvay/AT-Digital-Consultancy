/* === HEADER === */

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const menuIcon = document.getElementById('menu-bars');
    const menuCloseIcon = document.getElementById('menu-close');
    const mainMenu = document.getElementById('mainMenu');
    const body = document.body;

    const webDevLink = document.getElementById('webDevLink');
    const softwareSolutionsLink = document.getElementById('softwareSolutionsLink');
    const webDevDropdown = document.getElementById('webDevDropdown');
    const softwareSolutionsDropdown = document.getElementById('softwareSolutionsDropdown');

    // Functions to toggle the main menu
    function toggleMenu(open) {
        if (open) {
            mainMenu.style.display = 'flex';
            menuCloseIcon.style.display = 'block';
            menuIcon.style.display = 'none';
            body.style.overflow = 'hidden';
        } else {
            mainMenu.style.display = 'none';
            menuCloseIcon.style.display = 'none';
            menuIcon.style.display = 'block';
            body.style.overflow = 'auto';
        }
    }

    // Event listeners for the menu icons
    menuIcon.addEventListener('click', () => toggleMenu(true));
    menuCloseIcon.addEventListener('click', () => toggleMenu(false));


    // Function to disable specific links
    function disableLink(event) {
        event.preventDefault();
        console.log("Link disabled:", event.target);
    }

    // Function to toggle dropdown menus
    function toggleDropdown(dropdown) {
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.style.display = 'block';
            console.log("Dropdown opened:", dropdown);
        } else {
            dropdown.style.display = 'none';
            console.log("Dropdown closed:", dropdown);
        }
    }

    // Functions to show and hide dropdowns on hover
    function showDropdown(dropdown) {
        //clearTimeout(hideDropdownTimeout);
        dropdown.style.display = 'block';
        console.log("Dropdown shown:", dropdown);
    }
    
    function hideDropdown(dropdown) {
        //hideDropdownTimeout = setTimeout(() => {
            dropdown.style.display = 'none';
            console.log("Dropdown hidden:", dropdown);
        //}, 200);
    }

    // Update event listeners based on screen size
    function updateEventListeners() {
        const isMobile = window.matchMedia('(max-width: 1280px)').matches;

        // Debugging logs
        console.log("isMobile:", isMobile);
        console.log("webDevLink:", webDevLink);
        console.log("softwareSolutionsLink:", softwareSolutionsLink);

        if (webDevLink && softwareSolutionsLink) {
            if (isMobile) {
                // Disable the links
                webDevLink.addEventListener('click', disableLink);
                softwareSolutionsLink.addEventListener('click', disableLink);
                webDevLink.addEventListener('click', () => toggleDropdown(webDevDropdown));
                softwareSolutionsLink.addEventListener('click', () => toggleDropdown(softwareSolutionsDropdown));
                console.log("Event listeners added to disable links and toggle dropdowns for mobile view");

                // Remove hover listeners
                webDevLink.removeEventListener('mouseenter', showDropdownHandler);
                webDevLink.removeEventListener('mouseleave', hideDropdownHandler);
                webDevDropdown.removeEventListener('mouseenter', showDropdownHandler);
                webDevDropdown.removeEventListener('mouseleave', hideDropdownHandler);
                softwareSolutionsLink.removeEventListener('mouseenter', showDropdownHandler);
                softwareSolutionsLink.removeEventListener('mouseleave', hideDropdownHandler);
                softwareSolutionsDropdown.removeEventListener('mouseenter', showDropdownHandler);
                softwareSolutionsDropdown.removeEventListener('mouseleave', hideDropdownHandler);
            } else {
                // Re-enable the links (remove the event listener)
                webDevLink.removeEventListener('click', disableLink);
                softwareSolutionsLink.removeEventListener('click', disableLink);
                webDevLink.removeEventListener('click', () => toggleDropdown(webDevDropdown));
                softwareSolutionsLink.removeEventListener('click', () => toggleDropdown(softwareSolutionsDropdown));
                webDevDropdown.style.display = 'none';
                softwareSolutionsDropdown.style.display = 'none';
                console.log("Event listeners removed for desktop view");

                //Add hover listeners for desktop view
                webDevLink.addEventListener('mouseenter', () => showDropdown(webDevDropdown));
                webDevLink.addEventListener('mouseleave', () => hideDropdown(webDevDropdown));
                webDevDropdown.addEventListener('mouseenter', showDropdown);
                webDevDropdown.addEventListener('mouseleave', hideDropdown);
                softwareSolutionsLink.addEventListener('mouseenter', () => showDropdown(softwareSolutionsDropdown));
                softwareSolutionsLink.addEventListener('mouseleave', () => hideDropdown(softwareSolutionsDropdown));
                softwareSolutionsDropdown.addEventListener('mouseenter', showDropdownHandler);
                softwareSolutionsDropdown.addEventListener('mouseleave', hideDropdownHandler);
                console.log("Hover event listeners added for desktop view");
            }
        } else {
            console.log("One or both elements not found");
        }
    }

        // Event handlers for showing and hiding dropdowns
        function showDropdownHandler(event) {
            const dropdown = event.currentTarget.querySelector('.drop-down');
            if (dropdown) {
                showDropdown(dropdown);
            }
        }

        function hideDropdownHandler(event) {
            const dropdown = event.currentTarget.querySelector('.drop-down');
            if (dropdown) {
                hideDropdown(dropdown);
            }
        }
    

    // Initial setup
    updateEventListeners();

    // Update event listeners on window resize
    window.addEventListener('resize', updateEventListeners);

});



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