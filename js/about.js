const menubtn = document.getElementById('menu-icon');
const closebtn = document.getElementById('close-icon');
const popupMenu = document.querySelector('.popup-menu');

menubtn.addEventListener('click',() => {
    popupMenu.classList.toggle('hidden');
    menubtn.classList.toggle('hidden')
});

closebtn.addEventListener('click',() => {
    popupMenu.classList.toggle('hidden');
    menubtn.classList.toggle('hidden')
});