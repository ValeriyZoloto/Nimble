$(function () {
	//авто-закрытие мобильного меню
	$(".header__menu-open, .menu__item a").on("click", function () {
		$(".menu").toggleClass("menu--active"),
			$(".header__menu-open").toggleClass("header__menu-open--active");
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
					autoplay: true,
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
});
