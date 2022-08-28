"use strict";
let modalWindowBg = document.querySelector('.modalWindowBg');
let modalWindow = document.querySelector('.modalWindow');
let openModalbtns = document.querySelectorAll('.openModalWindow');
let btnCloseWindow = document.querySelector('.modalWindow__closeBtn');
let btnCheckTechnical = document.querySelector('.modalWindow__check__technical');
let btnCheckService = document.querySelector('.modalWindow__check__service');
let btnLinkSort1 = document.getElementById('linkSort1');
let btnLinkSort2 = document.getElementById('linkSort2');
let btnLinkSort3 = document.getElementById('linkSort3');
let btnLinkSort4 = document.getElementById('linkSort4');

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

$('#btnSend').click(function(){
	$.post(
		'php/calc.php',

		{
			technical: document.getElementById("technical").checked,
			service: document.getElementById("service").checked,
			name: document.forms["formSend"]["name"].value,
			phone: document.forms["formSend"]["phone"].value,
			email: document.forms["formSend"]["email"].value
		},

		function(msg){
			console.log(msg);
		}
	);
	return false;
});


btnLinkSort1.addEventListener('click', () => {
    btnLinkSort1.classList.toggle('active');
    btnLinkSort2.classList.remove('active');
    btnLinkSort3.classList.remove('active');
    btnLinkSort4.classList.remove('active');
});
btnLinkSort2.addEventListener('click', () => {
    btnLinkSort2.classList.toggle('active');
    btnLinkSort1.classList.remove('active');
    btnLinkSort3.classList.remove('active');
    btnLinkSort4.classList.remove('active');
});
btnLinkSort3.addEventListener('click', () => {
    btnLinkSort3.classList.toggle('active');
    btnLinkSort1.classList.remove('active');
    btnLinkSort2.classList.remove('active');
    btnLinkSort4.classList.remove('active');
});
btnLinkSort4.addEventListener('click', () => {
    btnLinkSort4.classList.toggle('active');
    btnLinkSort1.classList.remove('active');
    btnLinkSort2.classList.remove('active');
    btnLinkSort3.classList.remove('active');
});
