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
const filter = document.querySelectorAll('.filtersec');
let filterBtn = document.querySelectorAll('.sortPanel__btn');
let burgerBtn = document.querySelector('.mobile__burger');
let burgerMenu = document.querySelector('.mobile__menu');

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

jQuery(function($){
	$(".phone").mask("+7 (999) 999 - 99 99");
});


$('a[href^="#"').on('click', function() {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

let btn = document.querySelector('.scrolltotop')
function magic() {
  if (window.pageYOffset > 1800) {
  btn.classList.remove('hiddenscroll')
  } else { btn.classList.add('hiddenscroll') }
}
btn.onclick = function () {
	window.scrollTo(0,0)
}
window.onscroll = magic;

burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('active');
	burgerMenu.classList.toggle('active');
})

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

document.querySelector('.sortPanel').addEventListener('click', event =>{
	if (event.target.tagName !== 'BUTTON') return false;

	let filterClass = event.target.dataset['f'];
	let target = event.target;

	filterBtn.forEach(sortItem => sortItem.classList.remove('active'));
	target.classList.add('active');

	filter.forEach(elem => {
		elem.classList.remove('filterHide');
		if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
			elem.classList.add('filterHide');
		}
	});
});



