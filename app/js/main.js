$(function () {
	//авто-закрытие мобильного меню
	$(".header__menu-open, .menu__item a").on("click", function () {
		$(".menu").toggleClass("menu--active"),
			$(".header__menu-open").toggleClass("header__menu-open--active");
		$(".revolution__title").toggleClass("revolution__title--active");
	});

	//revolution-slider
	$(".revolution__cards").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow:
			'<button type="button" class="slick-next"><svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.723 0L27.2209 1.5022L29.6564 3.93774H0V6.06219H29.6564L27.2209 8.4978L28.723 10L33.723 4.99996L28.723 0Z" fill="#B4F299"/></svg></button>',
		infinite: false,
		responsive: [
			{
				breakpoint: 1441,
				settings: {
					slidesToShow: 3,
					draggable: true,
				},
			},
			{
				breakpoint: 1050,
				settings: {
					slidesToShow: 2,
					draggable: true,
					// autoplay: true,
				},
			},
			{
				breakpoint: 611,
				settings: {
					slidesToShow: 1,
					draggable: true,
				},
			},
		],
	});

	//staking__slider
	$(".staking__slider").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite: true,

		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					prevArrow:
						'<button type="button" class="slick-prev"><svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.00003 0L6.50216 1.5022L4.06662 3.93774H33.723V6.06219H4.06662L6.50216 8.4978L5.00003 10L-3.8147e-06 4.99996L5.00003 0Z" fill="#B4F299"/></svg></button>',

					nextArrow:
						'<button type="button" class="slick-next"><svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.723 0L27.2209 1.5022L29.6564 3.93774H0V6.06219H29.6564L27.2209 8.4978L28.723 10L33.723 4.99996L28.723 0Z" fill="#B4F299"/></svg></button>',
				},
			},
			{
				breakpoint: 582,
				settings: {
					slidesToShow: 2,
					prevArrow:
						'<button type="button" class="slick-prev"><svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.00003 0L6.50216 1.5022L4.06662 3.93774H33.723V6.06219H4.06662L6.50216 8.4978L5.00003 10L-3.8147e-06 4.99996L5.00003 0Z" fill="#B4F299"/></svg></button>',

					nextArrow:
						'<button type="button" class="slick-next"><svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.723 0L27.2209 1.5022L29.6564 3.93774H0V6.06219H29.6564L27.2209 8.4978L28.723 10L33.723 4.99996L28.723 0Z" fill="#B4F299"/></svg></button>',
				},
			},
			{
				breakpoint: 402,
				settings: {
					slidesToShow: 1,
					prevArrow:
						'<button type="button" class="slick-prev"><svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.00003 0L6.50216 1.5022L4.06662 3.93774H33.723V6.06219H4.06662L6.50216 8.4978L5.00003 10L-3.8147e-06 4.99996L5.00003 0Z" fill="#B4F299"/></svg></button>',

					nextArrow:
						'<button type="button" class="slick-next"><svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.723 0L27.2209 1.5022L29.6564 3.93774H0V6.06219H29.6564L27.2209 8.4978L28.723 10L33.723 4.99996L28.723 0Z" fill="#B4F299"/></svg></button>',
				},
			},
		],
	});

	//specifications__slider-upper
	$(".specifications__slider").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					arrows: true,
					prevArrow:
						'<button type="button" class="slick-prev"><svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.00003 0L6.50216 1.5022L4.06662 3.93774H33.723V6.06219H4.06662L6.50216 8.4978L5.00003 10L-3.8147e-06 4.99996L5.00003 0Z" fill="#B4F299"/></svg></button>',

					nextArrow:
						'<button type="button" class="slick-next"><svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.723 0L27.2209 1.5022L29.6564 3.93774H0V6.06219H29.6564L27.2209 8.4978L28.723 10L33.723 4.99996L28.723 0Z" fill="#B4F299"/></svg></button>',
				},
			},
			{
				breakpoint: 898,
				settings: {
					slidesToShow: 3,
					arrows: true,
					prevArrow: false,
					nextArrow:
						'<button type="button" class="slick-next"><svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.723 0L27.2209 1.5022L29.6564 3.93774H0V6.06219H29.6564L27.2209 8.4978L28.723 10L33.723 4.99996L28.723 0Z" fill="#B4F299"/></svg></button>',
				},
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					arrows: true,
					prevArrow: false,
					nextArrow:
						'<button type="button" class="slick-next"><svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.723 0L27.2209 1.5022L29.6564 3.93774H0V6.06219H29.6564L27.2209 8.4978L28.723 10L33.723 4.99996L28.723 0Z" fill="#B4F299"/></svg></button>',
				},
			},

			{
				breakpoint: 470,
				settings: {
					slidesToShow: 1,
					arrows: true,
					prevArrow: false,
					nextArrow:
						'<button type="button" class="slick-next"><svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.723 0L27.2209 1.5022L29.6564 3.93774H0V6.06219H29.6564L27.2209 8.4978L28.723 10L33.723 4.99996L28.723 0Z" fill="#B4F299"/></svg></button>',
				},
			},
		],
	});

	//kibotron__list

	$(".kibotron__slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 898,
				settings: {
					slidesToShow: 2,
					arrows: true,
					prevArrow: false,
					nextArrow:
						'<button type="button" class="slick-next"><svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.723 0L27.2209 1.5022L29.6564 3.93774H0V6.06219H29.6564L27.2209 8.4978L28.723 10L33.723 4.99996L28.723 0Z" fill="#B4F299"/></svg></button>',
				},
			},
		],
	});

	$(".token__btn").on("click", function () {
		$(".token__text--hidden").addClass("token__text--active");
		$(".token__btn").addClass("token__btn--hidden");
		$(".token__botton").addClass("token__botton--open");
	});

	$(".token__botton").on("click", function () {
		$(".token__text--hidden").removeClass("token__text--active");
		$(".token__botton").removeClass("token__botton--open");
		$(".token__btn").removeClass("token__btn--hidden");
	});

	$(".staking__btn").on("click", function () {
		$(".staking__text--hidden").addClass("staking__text--active");
		$(".staking__btn").addClass("staking__btn--hidden");
		$(".staking__botton").addClass("staking__botton--open");
	});

	$(".staking__botton").on("click", function () {
		$(".staking__text--hidden").removeClass("staking__text--active");
		$(".staking__botton").removeClass("staking__botton--open");
		$(".staking__btn").removeClass("staking__btn--hidden");
	});

	$(".affiliate__btn").on("click", function () {
		$(".affiliate__hidden").addClass("affiliate__hidden--active");
		$(".affiliate__btn").addClass("affiliate__btn--hidden");
		$(".affiliate__botton").addClass("affiliate__botton--open");
	});

	$(".affiliate__botton").on("click", function () {
		$(".affiliate__hidden").removeClass("affiliate__hidden--active");
		$(".affiliate__botton").removeClass("affiliate__botton--open");
		$(".affiliate__btn").removeClass("affiliate__btn--hidden");
	});
});
