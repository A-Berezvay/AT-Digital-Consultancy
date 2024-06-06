document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    showMenu('nav-toggle', 'nav-menu');
});

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);


          console.log('showMenu function called');
          console.log('toggle element:', toggle);
          console.log('nav element:', nav);

    if (toggle && nav) {  // Check if elements exist
        const toggleMenu = () => {
            event.preventDefault()
            console.log('Prevent default')
            // Add show-menu class to nav menu
            nav.classList.toggle('show-menu');
            console.log('toggle showMenu enabled');
            // Add show-icon to show and hide the menu icon
            toggle.classList.toggle('show-icon');
            console.log('toggle icon enabled');
        };

        // Add both click and touchstart event listeners
        toggle.addEventListener('click', toggleMenu);
        console.log('Click, toggle menu Event Listener');
        toggle.addEventListener('touchstart', toggleMenu);
        console.log('touchstart toggle menu Event Listener');
    }
};


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