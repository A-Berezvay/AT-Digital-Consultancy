document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    /* === SCROLLING EFFECT === */

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            
                observer.unobserve(entry.target);
            }
        });
    });
    
    const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
    hiddenElementsLeft.forEach((el) => observer.observe(el));

    const hiddenElementsRight = document.querySelectorAll('.hidden-right');
    hiddenElementsRight.forEach((el) => observer.observe(el));

    const hiddenElementsBottom = document.querySelectorAll('.hidden-bottom');
    hiddenElementsBottom.forEach((el) => observer.observe(el));

    /* === HEADER NAVIGATION === */

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

    //RESPONSIVE NAVIGATION

    const servicesPlusIcon = document.getElementById('services-plus-icon');
    const servicesMinusIcon = document.getElementById('services-minus-icon');
    const aboutPlusIcon = document.getElementById('about-plus-icon');
    const digitalTransformationPlusIcon = document.getElementById('digital-transformation-plus-icon');

    servicesMinusIcon.style.display = 'none';

    function updateEventListeners() {
        const isMobile = window.matchMedia('(max-width: 1280px)').matches;

        if (isMobile) {
            serviceBtn.removeEventListener('mouseenter', showDropdown);
            serviceBtn.removeEventListener('mouseleave', hideDropdown);
            dropdownMenu.removeEventListener('mouseenter', showDropdown);
            dropdownMenu.removeEventListener('mouseleave', hideDropdown);

            dropdownMenu.style.display = 'none';

            serviceBtn.addEventListener('click', function() {
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
            digitalTransformationPlusIcon.style.display = 'none';

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
});
