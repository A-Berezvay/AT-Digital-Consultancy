document.addEventListener('DOMContentLoaded', function() {
    var servicesLink = document.getElementById('servicesLink');
    var servicesDropdown = document.getElementById('servicesDropdown');

    // Show the dropdown when the Services link is hovered
    servicesLink.addEventListener('mouseenter', function() {
        servicesDropdown.style.display = 'block';
    });

    // Hide the dropdown when the mouse leaves the Services dropdown area
    servicesDropdown.addEventListener('mouseleave', function() {
        servicesDropdown.style.display = 'none';
    });

    // Optional: Dynamically load dropdown content here if necessary
    // For example, you could populate servicesDropdown.innerHTML
});
