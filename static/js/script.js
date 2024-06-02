const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('menu__body')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		}
	})

	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}

/*===========================================*/

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})



















$('body').append('<div class="upbtn"></div>');
$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$('.upbtn').css({
			transform: 'scale(1)'
		});
        } else {
		$('.upbtn').css({
			transform: 'scale(0)'
		});
	}
});
$('.upbtn').on('click',function() {
	$('html, body').animate({
		scrollTop: 0
	}, 500);
	return false;
});











$(window).on("load", function () {
	var sum=0;
	$('.banner-container li img').each(function(){ 
		sum += $(this).width();
	});
	$('.banner-container ul').width(sum);
});
$(function(){
	var winWidth = $(".banner-container").width();
	var ulWidthCount = 0;
	ulWidthCount = $('.banner-container li').length;
	$(".banner-container li").width(winWidth/ulWidthCount);
	$(".banner-container li").hover(function(){			
		ulWidthCount = $('.banner-container li').length;
		var imgWidth = $(this).find("img").width();
		var bannerLi = winWidth - imgWidth;
		var remWidth = ulWidthCount - 1;
		var appWidth = bannerLi/remWidth;
		$(".banner-container li").stop(true, false).animate({width: appWidth},700);
		$(this).stop(true, false).animate({width: imgWidth},700);
		$(this).find("span.overlay").stop(true, false).fadeOut();
		}, function(){
		$(this).animate({width: winWidth/ulWidthCount},700);
		$(".banner-container li").animate({width:winWidth/ulWidthCount},700);
		$(this).find("span.overlay").fadeIn();
	});	
});	




let anim = document.querySelectorAll('.animimate-heading');
for (let a = 0; a < anim.length; a++){
	let arr = anim[a].innerHTML.split(/\s+/);
	let str = '';
	for(let i = 0; i < arr.length; i++) {
		if(arr[i]){
			arr[i] = '<div>'+arr[i]+'</div>';
		}
	}
	anim[a].innerHTML = arr.join(' ');
}
let animHeading = document.querySelectorAll('.animimate-heading div');
for (let a = 0; a < animHeading.length; a++){
	let letters = animHeading[a].textContent.split('');
	let effects = ['fadeIn', 'bounceInUp', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'shake', 'flash', 'pulse', 'zoomIn', 'rotateIn', 'jackInTheBox', 'zoomInDown', 'heartBeat', 'headShake'];
	let content = letters.map((val, i) => {
		let delay = Math.floor((Math.random() * 600) + 1);
		let rand = Math.floor(Math.random() * effects.length);
		if (val != " ") {
			return ('<span class="wow '+ effects[rand] + '" style="animation-delay: '+ delay + 'ms">'+ val +'</span>');
			} else {
			return (' &nbsp;');
		}
	});
	animHeading[a].innerHTML = "";
	for (let i = 0; i < content.length; i++) {
		animHeading[a].innerHTML += content[i];
	}
}
new WOW().init();