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

    const menuIcon = document.getElementById('menu-bars');
    const menuCloseIcon = document.getElementById('menu-close');
    const mainMenu = document.getElementById('mainMenu');


    function updateEventListeners() {
        const isMobile = window.matchMedia('(max-width: 1280px)').matches;

        if (isMobile) {
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
                menuIcon.style.display = 'block'; 
            });
        } else {
            menuCloseIcon.style.display = 'none';
            menuIcon.style.display = 'none';

        }
    }

    updateEventListeners();

    window.addEventListener('resize', updateEventListeners);

});
