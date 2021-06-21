const btn = document.querySelector('.mobile-button');
const menu = document.querySelector('.mobile-menu');


btn.addEventListener('click', ()=> {
  menu.classList.toggle('hidden');
});
