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

$(document).ready(function(){
	$('#lilianimore1').click(function(){
		$('#lilianicard1').toggleClass('hide', 1000);	
		$('#lilianimore1').toggleClass('active', 1000);		
		return false;
	});				
});
$(document).ready(function(){
	$('#lilianimore2').click(function(){
		$('#lilianicard2').toggleClass('hide', 1000);	
		$('#lilianimore2').toggleClass('active', 1000);		
		return false;
	});				
});
$(document).ready(function(){
	$('#lilianimore3').click(function(){
		$('#lilianicard3').toggleClass('hide', 1000);	
		$('#lilianimore3').toggleClass('active', 1000);		
		return false;
	});				
});
$(document).ready(function(){
	$('#rainfinemore1').click(function(){
		$('#rainfinecard1').toggleClass('hide', 1000);	
		$('#rainfinemore1').toggleClass('active', 1000);		
		return false;
	});				
});
$(document).ready(function(){
	$('#rainfinemore2').click(function(){
		$('#rainfinecard2').toggleClass('hide', 1000);	
		$('#rainfinemore2').toggleClass('active', 1000);		
		return false;
	});				
});
$(document).ready(function(){
	$('#rainfinemore3').click(function(){
		$('#rainfinecard3').toggleClass('hide', 1000);	
		$('#rainfinemore3').toggleClass('active', 1000);		
		return false;
	});				
});
$(document).ready(function(){
	$('#samaszmore').click(function(){
		$('#samaszcard').toggleClass('hide', 1000);	
		$('#samaszmore').toggleClass('active', 1000);		
		return false;
	});				
});