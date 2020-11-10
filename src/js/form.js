$(function () {

// Ввод только цифр
	$('.js-number').keypress(function(e){
		let charCode = (e.which) ? e.which : e.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		  return false;
		}
	});
	
// Деактивация кнопки отправки формы при снятии галочки с чекбокса согласия
	$('.js-agree').change(function () {
		let $this = $(this);
		let btn = $this.closest('.js-form').find('.submit');
		if ($this.is(':checked')) {
			btn.removeAttr("disabled");
		} else {
			btn.attr("disabled", true);
		}
	});


// Валидация формы
	let form = $('.js-form');

	form.each(function(){
		let thisForm = $(this);
		let url = thisForm.attr('action');

		thisForm.validate({
			focusInvalid: false,
			highlight: function(element) {
              $(element).closest(".form-field").addClass('form-field--error');		      
            },
            unhighlight: function(element) {
              $(element).closest(".form-field").removeClass('form-field--error');		      
            },
			submitHandler: function(form, event){
				event.preventDefault();
					let data = new FormData(),
						formParams = thisForm.serializeArray();

					$.each(thisForm.find('.js-input-file'), function(i, tag) {
						$.each($(tag)[0].files, function(i, file) {
							data.append(tag.name, file);
						});
					});

					$.each(formParams, function(i, val) {
						data.append(val.name, val.value);
					});

					data.append('key', 'value');

				/* это нужно будет вывеcти после успешной отправки формы, 
				это здесь только для демонстарации выхода попапа */

					thisForm.find('button').prop('disabled', false);
					thisForm[0].reset();
					$('.popup').removeClass('is-show');
					$('#popup-thank').addClass('is-show');

					let $select2 = $('.js-select');
					if ($select2.length) {
						$select2.each(function () {
							$(this).val('').trigger('change');
							;
						})
					}

				/* ******* */
				$.ajax({
					url: thisForm[0].action,
					type: 'POST',
					processData: false,
					contentType: false,
					data: data,
					beforeSend: function (data) {
						thisForm.find('button').attr('disabled', 'disabled');
					},
					success: function (data) {
						if (data['error']) {
							console.log('error');
						} else {
							setTimeout(function () {
								thisForm.find('button').prop('disabled', false);
								thisForm[0].reset();
								$('.popup').removeClass('is-show');
								$('#popup-thank').addClass('is-show');

								let $select2 = $('.js-select');
								if ($select2.length) {
									$select2.each(function () {
										$(this).val('').trigger('change');
										;
									})
								}
								
							}, 500);
						}
					},
					error: function (xhr, ajaxOptions, thrownError) {
						console.log(xhr.status);
						console.log(thrownError);
					}
				});
				return false;
			}
		});

	})

	$('#popup-thank').on('click', function(){
		$(this).removeClass('is-show');
	})

});

