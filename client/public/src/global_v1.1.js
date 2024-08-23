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

    //RESPONSIVE ICONS

    const servicesPlusIcon = document.getElementById('services-plus-icon');
    const servicesMinusIcon = document.getElementById('services-minus-icon');
    const aboutPlusIcon = document.getElementById('about-plus-icon');
    const digitalTransformationPlusIcon = document.getElementById('digital-transformation-plus-icon');
    const softwareRecommendationsPlusIcon = document.getElementById('software-recommendation-plus-icon');

    const menuIcon = document.getElementById('menu-bars');
    const menuCloseIcon = document.getElementById('menu-close');
    const mainMenu = document.getElementById('mainMenu');

    servicesMinusIcon.style.display = 'none';

    function updateEventListeners() {
        const isMobile = window.matchMedia('(max-width: 1280px)').matches;

        if (isMobile) {
            serviceBtn.removeEventListener('mouseenter', showDropdown);
            serviceBtn.removeEventListener('mouseleave', hideDropdown);
            dropdownMenu.removeEventListener('mouseenter', showDropdown);
            dropdownMenu.removeEventListener('mouseleave', hideDropdown);

            dropdownMenu.style.display = 'none';

            //Add click listener for mobile dropdown
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

            // Menu icon toggles for mobile
            menuIcon.style.display = 'block';
            menuCloseIcon.style.display = 'none';

            menuIcon.addEventListener('click', function() {
                mainMenu.style.display = 'block';
                menuCloseIcon.style.display = 'block';
                menuIcon.style.display = 'none';
            });

            menuCloseIcon.addEventListener('click', function() {
                mainMenu.style.display = 'none';
                menuCloseIcon.style.display = 'none';
                menuIcon.style.display = 'none'; 
            });

        } else {
            // Re-enable hover listeners for desktop
            serviceBtn.addEventListener('mouseenter', showDropdown);
            serviceBtn.addEventListener('mouseleave', hideDropdown);
            dropdownMenu.addEventListener('mouseenter', showDropdown);
            dropdownMenu.addEventListener('mouseleave', hideDropdown);

            // Reset styles and remove click listeners
            dropdownMenu.style.display = 'none';
            servicesPlusIcon.style.display = 'none';
            servicesMinusIcon.style.display = 'none';
            aboutPlusIcon.style.display = 'none';
            digitalTransformationPlusIcon.style.display = 'none';
            softwareRecommendationsPlusIcon.style.display = 'none';

            menuIcon.style.display = 'none';
            menuCloseIcon.style.display = 'none';

        }
    }

    // FUNCTION FOR DESKTOP HOVER EFFECT

    function showDropdown() {
        dropdownMenu.style.display = 'block';
    }

    function hideDropdown() {
        dropdownMenu.style.display = 'none';
    }

    updateEventListeners();

    window.addEventListener('resize', updateEventListeners);

});
