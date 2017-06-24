$('#phone').mask('000000000000000');	
$(document).ready(function () {
	$.validator.addMethod("email", function(value, element) {
	return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,61}\.[a-zA-Z.]{2,5}$/i.test(value);
            }, "Email Address is invalid: Please enter a valid email address.");
	$("#modalForm").validate({
		rules: {
			phone: {
				required: true,
				phoneUS: true,
				minlength: 10,
				maxlength: 15
			},
		},
		messages: {
			phone: {
				required: "Please provide your phone number",
				minlength: "Your phone must be at least 10 characters",
				maxlength: "Your phone must be less than 15 characters"
			},
		}
	});
});
		