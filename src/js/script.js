$(document).ready(function() {
	$(function() {

		$('.carousel__inner').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<button type="button" class="prev"><img src="icons/left_arrow.svg" alt="prev"></button>',
			nextArrow: '<button type="button" class="next"><img src="icons/right_arrow.svg" alt="next"></button>',
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						dots: true,
						arrows: false
					}
				}
			]
		});
	  
		$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
			$(this)
				.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
				.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
		});

		function toggleSlide(item) {
			$(item).each(function(i) {
				$(this).on('click', function(e) {
					e.preventDefault();
					$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
					$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
				})
			})
		};

		toggleSlide('.catalog-item__link');
		toggleSlide('.catalog-item__back');

		// Modal

		$('[data-modal=consultation]').on('click', function() {
			$('.overlay, #consultation').fadeIn();
		});
		$('.modal__close').on('click', function() {
			$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
		});

		$('.button_mini').each(function(i) {
			$(this).on('click', function() {
				$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
				$('.overlay, #order').fadeIn();
			});
		});

		// validation

		function validateForms(form) {
			$(form).validate({
				rules: {
					name: 'required',
					phone: {
						required: true,
						minlength: 11,
						maxlength: 11
					},
					email: {
						required: true,
						email: true
					}
				},
				messages: {
					name: "Пожалуйста, введите своё имя",
					phone: {
						required: "Пожалуйста, введите свой номер телефона",
						minlength: jQuery.validator.format("Введите хотя бы {0} символов!"),
						maxlength: "Некорректный номер телефона"
					},
					email: {
						required: "Пожалуйста, введите свой почтовый адрес",
						email: "Ваш почтовый адрес должен быть в формате name@domain.com"
					}
				   }
			});
		};

		validateForms('#consultation-form');
		validateForms('#consultation .feed-form');
		validateForms('#order .feed-form');

		// mask

		$('input[name=phone').mask("+7 (999) 999-99-99")
	});
});