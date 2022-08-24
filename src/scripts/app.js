const menuBtn = document.querySelector('.nav__menu-svg')
const overlay = document.querySelector('.nav__overlay')
const showLinksItems = document.querySelector('.nav__links')
const selectAgent = document.querySelector('.feature__column')


menuBtn.addEventListener('click', function(){

    if(menuBtn.classList.contains('open')){
        menuBtn.classList.remove('open');
        showLinksItems.classList.remove('show-links');
        showLinksItems.classList.add('hide-links');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    }
    else{
        menuBtn.classList.add('open');
        showLinksItems.classList.add('show-links');
        showLinksItems.classList.remove('hide-links');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
}});





