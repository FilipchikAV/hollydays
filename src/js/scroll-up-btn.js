const btn = document.getElementById("scrollToTopBtn");

// Показываем кнопку при прокрутке страницы вниз
window.onscroll = function() {
	// Если прокрутили больше 300px от верха страницы
	if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
		btn.style.display = "block";
	} else {
		btn.style.display = "none";
	}
};

// Реализуем плавный скролл наверх при клике
btn.addEventListener("click", function() {
	window.scrollTo({
		top: 0,
		behavior: "smooth" /* Отвечает за плавность прокрутки */
	});
});
