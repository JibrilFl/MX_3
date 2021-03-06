window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
          menuItem = document.querySelectorAll('.menu_item'),
          hamburger = document.querySelector('.hamburger'),
          logo = document.querySelectorAll('.promo__logo_img');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        logo.forEach(item => {
            item.classList.toggle('promo__logo_active');
        });
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            logo.forEach(i => {
                i.classList.toggle('promo__logo_active');
            });
        });
    });
});