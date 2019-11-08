function isValidString(str) {
	if (!/^(\w|\s|[-_])+$/g.test(str)) return false;
	return true;
}

function isValidEmail(email) {
	if (
		!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			email
		)
	) {
		return false;
	}

	return true;
}

function validate(value, type) {
	if (!value) return `${type} is required`;
	if (type === 'name') {
		const valid = isValidString(value);
		if (!valid) return `${type} is invalid. Can only Have alphanumeric values`;
		if (value.trim().length < 4) {
			return `${type} Must be 4 or more in length`;
		}
	}

	if (type === 'email') {
		const valid = isValidEmail(value);
		if (!valid) return `${type} is invalid `;
	}

	if (type === 'password') {
		if (value.trim().length < 8) {
			return `${type} must be 8 or more in length`;
		}
	}

	return null;
}

function validateLogin({ email, password }) {
	const errors = {};
	const invalidEmail = validate(email, 'email');
	const invalidPassword = validate(password, 'password');
	if (invalidPassword) errors.password = invalidPassword;
	if (invalidEmail) errors.email = invalidPassword;
	return Object.keys(errors).length ? errors : null;
}

function validateSignup({ email, name, password }) {
	const errors = {};
	const invalidEmail = validate(email, 'email');
	const invalidPassword = validate(password, 'password');
	const invalidName = validate(name, 'name');
	if (invalidPassword) errors.password = invalidPassword;
	if (invalidEmail) errors.email = invalidPassword;
	if (invalidName) errors.name = invalidName;
	return Object.keys(errors).length ? errors : null;
}

exports.validate = validate;
exports.validateLogin = validateLogin;
exports.validateSignup = validateSignup;
