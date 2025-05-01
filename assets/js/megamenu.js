const menu = document.querySelector('.menu');
const menuSection = menu ? menu.querySelector('.menu-section') : null;
const menuArrow = menu ? menu.querySelector('.menu-mobile-arrow') : null;
const menuClosed = menu ? menu.querySelector('.menu-mobile-close') : null;
const menuTrigger = document.querySelector('.menu-mobile-trigger');
const menuOverlay = document.querySelector('.overlay');
let subMenu;
let previousMenu = []; // Stack to keep track of menu navigation

if (menu && menuSection) {
    menuSection.addEventListener('click', (e) => {
        if (!menu.classList.contains('active')) {
            return;
        }

        if (e.target.closest('.menu-item-has-children')) {
            const hasChildren = e.target.closest('.menu-item-has-children');
            showSubMenu(hasChildren);
        }
    });
}

if (menuArrow) {
    menuArrow.addEventListener('click', () => {
        hideSubMenu();
    });
}

if (menuTrigger) {
    menuTrigger.addEventListener('click', () => {
        toggleMenu();
    });
}

if (menuClosed) {
    menuClosed.addEventListener('click', () => {
        toggleMenu();
    });
}

if (menuOverlay) {
    menuOverlay.addEventListener('click', () => {
        toggleMenu();
    });
}

function toggleMenu() {
    if (menu) {
        menu.classList.toggle('active');
    }
    if (menuOverlay) {
        menuOverlay.classList.toggle('active');
    }
    if (menu && !menu.classList.contains('active')) {
        resetMenu(); // Reset menu when closing
    }
}

function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector('.menu-subs');
    if (subMenu) {
        previousMenu.push(subMenu); // Store the current subMenu in the stack
        subMenu.classList.add('active');
        subMenu.style.animation = 'slideLeft 0.5s ease forwards';
        // const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
        if (menu) {
            // menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
            menu.querySelector('.menu-mobile-header').classList.add('active');
        }
        if (menuArrow) {
            menuArrow.style.display = 'block'; // Ensure back button is visible
        }
    }
}

function hideSubMenu() {
    if (previousMenu.length > 0) {
        subMenu = previousMenu.pop(); // Go back to the previous menu
        subMenu.style.animation = 'slideRight 0.5s ease forwards';
        setTimeout(() => {
            subMenu.classList.remove('active');
        }, 300);

        if (previousMenu.length === 0) {
            if (menu) {
                // menu.querySelector('.menu-mobile-title').innerHTML = '';
                menu.querySelector('.menu-mobile-header').classList.remove('active');
            }
            if (menuArrow) {
                menuArrow.style.display = 'none'; // Hide back button when at root
            }
        }
    }
}

function resetMenu() {
    // Reset menu state when closing
    previousMenu = [];
    if (menu) {
        // menu.querySelector('.menu-mobile-title').innerHTML = '';
        menu.querySelector('.menu-mobile-header').classList.remove('active');
    }
    if (menuArrow) {
        menuArrow.style.display = 'none'; // Hide back button
    }
}

window.onresize = function() {
    if (this.innerWidth > 991) {
        if (menu && menu.classList.contains('active')) {
            toggleMenu();
        }
    }
};