const btnDark = document.querySelectorAll(".btn.btn__showed");

var arr1= [800, 1200, 1600, 2200];
var arr2= [1300, 1500, 2000, 2500];

window.addEventListener('scroll', function() {
	let scrollPos = window.scrollY;

	if (scrollPos > arr1[0] && scrollPos < arr2[0]) {
		btnDark[0].classList.add('btn__dark_show');
		
	} else {
		btnDark[0].classList.remove('btn__dark_show');
	}

	if (scrollPos > arr1[1] && scrollPos < arr2[1]) {
		btnDark[1].classList.add('btn__dark_show');
		
	} else {
		btnDark[1].classList.remove('btn__dark_show');
	}

	if (scrollPos > arr1[2] && scrollPos < arr2[2]) {
		btnDark[2].classList.add('btn__dark_show');
	} else {
		btnDark[2].classList.remove('btn__dark_show');
	}

	if (scrollPos > arr1[3] && scrollPos < arr2[3]) {
		btnDark[3].classList.add('btn__dark_show');
	} else {
		btnDark[3].classList.remove('btn__dark_show');
	}
	
});