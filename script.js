// copy menu for mobile

function copyMenu() {
    // copy inside .dpt-cat to departments
    let dptCategory = document.querySelector('.dpt-cat')
    let dptPlace = document.querySelector('.departments')
    dptPlace.innerHTML = dptCategory.innerHTML

    // copy inside nav to nv
    let mainNav = document.querySelector('.header-nav nav')
    let navPlace = document.querySelector('.off-canvas nav')
    navPlace.innerHTML = mainNav.innerHTML

    // copy .header-top .wrapper to .thetop-nav
    let toNav = document.querySelector('.header-top .wrapper')
    let toPlace = document.querySelector('.off-canvas .thetop-nav')
    toPlace.innerHTML = toNav.innerHTML
}
copyMenu()

// show mobile menu
const menuButton = document.querySelector('.trigger'),
    closeButton = document.querySelector('.t-close'),
    addclass = document.querySelector('.site')

menuButton.addEventListener('click', () => {
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', () => {
    addclass.classList.remove('showmenu')
})

// show submenu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small')
submenu.forEach(menu => menu.addEventListener('click', toggle))

function toggle(e) {
    console.log(e);
    e.preventDefault()
    console.log(this);
    submenu.forEach(item => item != this ? item.closest('.has-child').classList.remove('expand') : null)
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
}

//  slider
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'
const swiper = new Swiper('.swiper', {
    loop: true,
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },
});