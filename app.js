const btnDark = document.querySelectorAll(".btn__dark.showed");
const btnDark__2 = document.querySelectorAll(".btn__dark.showed__2");
const btnDark__3 = document.querySelectorAll(".btn__dark.showed__3");
const btnWhite = document.querySelectorAll(".btn__white.showed");

window.addEventListener('scroll', function() {
	let scrollPos = window.scrollY;

	if (scrollPos > 800 && scrollPos < 1300) {
		for (btns of btnDark) {
			btns.classList.add('btn__dark--show');
		}
	} else {
		for (btns of btnDark) {
			btns.classList.remove('btn__dark--show');
		}
	}
	
});

window.addEventListener('scroll', function() {
	let scrollPos = window.scrollY;

	if (scrollPos > 1200 && scrollPos < 1500) {
		for (btns of btnWhite) {
			btns.classList.add('btn__dark--show');
		}
	} else {
		for (btns of btnWhite) {
			btns.classList.remove('btn__dark--show');
		}
	}
	
});

window.addEventListener('scroll', function() {
	let scrollPos = window.scrollY;

	if (scrollPos > 1600 && scrollPos < 2000) {
		for (btns of btnDark__2) {
			btns.classList.add('btn__dark--show');
		}
	} else {
		for (btns of btnDark__2) {
			btns.classList.remove('btn__dark--show');
		}
	}
	
});

window.addEventListener('scroll', function() {
	let scrollPos = window.scrollY;

	if (scrollPos > 2200 && scrollPos < 2500) {
		for (btns of btnDark__3) {
			btns.classList.add('btn__dark--show');
		}
	} else {
		for (btns of btnDark__3) {
			btns.classList.remove('btn__dark--show');
		}
	}
	
});
