// slick initiation

$('.slider').slick({
	dots: true,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	adaptiveHeight: true,
	autoplay: true,
	autoplaySpeed: 3000,
	arrows: false,
	mobileFirst: true

});

// top nav change on scrool 

var nav = document.querySelector('.navbar');

window.onscroll = function () {
	if (window.pageYOffset > 0) {
		document.querySelector('.navbar').classList.add('scrolled');
	}
	else {
		document.querySelector('.navbar').classList.remove('scrolled');
	}
}


//mobile nav menu show/hide

function toggle() {

	var cont = document.getElementById('cont');
	if (cont.style.display == 'flex' && window.innerWidth <= 425) {
		cont.style.display = 'none';
		// document.querySelector('.navbar').style.position = 'fixed';
		document.querySelector('.navbar__sandwich-menu').style.backgroundImage = 'url(../images/sandwich-lines.svg)';

	}
	else {
		cont.style.display = 'flex';
		// document.querySelector('.navbar').style.position = 'initial';
		document.querySelector('.navbar__sandwich-menu').style.backgroundImage = 'url(../images/sandwich-x.svg)';

	}
}

// function closeOnClick() {
// 	var item = document.querySelector('.navbar-menu');
	
// 	if (item.style.display != 'none' ) {

// 		document.querySelector('.navbar-menu').style.display = 'none';
// 		// alert(window.innerWidth);

// 	}


// }