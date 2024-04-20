const serviceBtn = document.getElementById('servicesLink');
const dropdownMenu = document.getElementById('servicesDropdown');

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


