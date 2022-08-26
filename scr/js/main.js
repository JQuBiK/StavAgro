"use strict";
let modalWindowBg = document.querySelector('.modalWindowBg');
let modalWindow = document.querySelector('.modalWindow');
let openModalbtns = document.querySelectorAll('.openModalWindow');
let btnCloseWindow = document.querySelector('.modalWindow__closeBtn');
let btnCheckTechnical = document.querySelector('.modalWindow__check__technical');
let btnCheckService = document.querySelector('.modalWindow__check__service');

openModalbtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modalWindowBg.classList.add('active');
        modalWindow.classList.add('active');
    })
});

btnCloseWindow.addEventListener('click', () => {
    modalWindowBg.classList.remove('active');
    modalWindow.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === modalWindowBg) {
        modalWindowBg.classList.remove('active');
        modalWindow.classList.remove('active');
    }
});

btnCheckTechnical.addEventListener('click', () => {
    btnCheckTechnical.classList.toggle('active');
});
btnCheckService.addEventListener('click', () => {
    btnCheckService.classList.toggle('active');
});