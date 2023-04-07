// ======= BURGER =======

let contactBurger = document.querySelector('.contact_burger');
let navList = document.querySelector('.nav_list');
contactBurger.addEventListener('click', () => {
	contactBurger.classList.toggle('select');
	navList.classList.toggle('select');
});

//======= THEME ======

document.querySelector('.themetoggle').addEventListener('click', (e) => {
	e.preventDefault();
	if (localStorage.getItem('theme') === 'dark') {
		localStorage.removeItem('theme');
	} else {
		localStorage.setItem('theme', 'dark');
	}
	addDarkClass();
});

function addDarkClass() {
	try {
		if (localStorage.getItem('theme') === 'dark') {
			document.querySelector('html').classList.add('dark');
			document.querySelector('.themetoggle img').src = './img/eye-dark.png';
		} else {
			document.querySelector('html').classList.remove('dark');
			document.querySelector('.themetoggle img').src = './img/visibility.svg';
		}
	} catch (err) {}
}

addDarkClass();

// ======= SLIDER =====

$('.reviews_slider').slick({
	autoplay: true,
	dots: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
			},
		},
	],
});

//========= Accordion JS===========

const [...items] = document.querySelectorAll('.accordion__header');

items.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.target.classList.toggle('open-accordion');

		let show = e.target.nextElementSibling;
		if (show.style.display === 'block') {
			show.style.display = 'none';
		} else {
			show.style.display = 'block';
		}

		if (show.style.maxHeight) {
			show.style.maxHeight = null;
		} else {
			show.style.maxHeight = show.scrollHeight + 'px';
		}
	});
});

//========= Accordion jQuery ========
// $(document).ready(function(){
//   $('#first-content').toggleClass('open-accordion')
// })

// $(document).ready(function () {
//   $('.accordion__header').click(function () {
//     $('.accordion__content').not($(this).next()).slideUp(400);
//     $(this).next().slideToggle(400);

//     $('.accordion__item')
//       .not($(this).closest('.accordion__item'))
//       .removeClass('open-accordion');
//     $(this).closest('.accordion__item').toggleClass('open-accordion');
//   });
// });

//====== СЛАЙДЕР НА ЧИСТОМУ JS =======
/*
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const slideImg = document.querySelector('.slider-img img');

const [...slideSmall] = document.querySelectorAll('.slider-small-img li img');

console.log(slideSmall);

slideSmall.forEach((el) => {
  el.addEventListener('click', (el) => {
    // console.log(el.target.src);
    if (el.target) {
      slideImg.src = el.target.src;
    }
  });
});

console.log(slideImg);

next.onclick = function () {
  let currentSlide = document.querySelector('.active');

  currentSlide.classList.remove('active');

  let nextSlide = currentSlide.nextElementSibling;
  if (nextSlide) {
    nextSlide.classList.add('active');
  } else {
    nextSlide = document.querySelector('.slider-small-img li');
    nextSlide.classList.add('active');
  }

  slideImg.src = nextSlide.querySelector('img').src;
};

prev.onclick = function () {
  let currentSlide = document.querySelector('.active');

  currentSlide.classList.remove('active');

  let prevSlide = currentSlide.previousElementSibling;
  if (prevSlide) {
    prevSlide.classList.add('active');
  } else {
    prevSlide = document.querySelector('.slider-small-img li:last-child');
    prevSlide.classList.add('active');
  }

  slideImg.src = prevSlide.querySelector('img').src;
};
*/

//======== СЛАЙДЕР НА jQuery =======

// const slider = $('.slider');

// $('.slider .slider-small-img li img').on('click', function () {
// 	$('.slider .slider-small-img li.active').removeClass('active');
// 	$(this).parent().addClass('active');
// 	$('.slider .slider-img img').attr('src', $(this).attr('src'));
// });

// $('#prev').on('click', function () {
// 	let elem = $('.active').prev();
// 	console.log(elem.length);
// 	$('.slider-small-img li.active').removeClass('active');
// 	if (!elem.length) {
// 		elem = $('.slider-small-img li:last-child');
// 	}
// 	elem.addClass('active');
// 	$('.slider-img img').attr('src', elem.find('img').attr('src'));
// });

// $('#next').on('click', function () {
// 	let elem = $('.active').next();

// 	$('.slider-small-img li.active').removeClass('active');
// 	if (!elem.length) {
// 		elem = $('.slider-small-img li:first-child');
// 	}
// 	elem.addClass('active');
// 	$('.slider-img img').attr('src', elem.find('img').attr('src'));
// });
