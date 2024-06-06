document.addEventListener('DOMContentLoaded', () => {
    showMenu('nav-toggle', 'nav-menu');
});

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if(toggle && nav) {  // Check if elements exist
        toggle.addEventListener('click', () => {
            // Add show-menu class to nav menu
            nav.classList.toggle('show-menu');
            console.log('Menu show');
            // Add show-icon to show and hide the menu icon
            toggle.classList.toggle('show-icon');
            console.log('Icon show');
        });
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