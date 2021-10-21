$(function () {
	//авто-закрытие мобильного меню
	$(".header__menu-open, .menu__item a").on("click", function () {
		$(".menu").toggleClass("menu--active"),
			$(".header__menu-open").toggleClass("header__menu-open--active");
	});
});
