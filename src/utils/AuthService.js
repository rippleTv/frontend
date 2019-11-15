const API_URL = process.env.REACT_APP_API_URL;

class AuthService {
	constructor() {
		this.user = null;
	}
	// performs api calls sending the required authentication headers
	fetch(url, options) {
		const headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		};

		if (this.isAuthenticated()) {
			headers['x-auth-token'] = this.getToken();
		}

		return fetch(url, {
			headers,
			...options
		})
			.then(this.checkStatus)
			.then(response => response.json());
	}

	setToken(token) {
		localStorage.setItem('token', token);
	}

	// Retrieves the user token from localStorage
	getToken() {
		return localStorage.getItem('token');
	}

	// check if user is authenticated
	isAuthenticated() {
		return localStorage.getItem('token');
	}

	async checkStatus(response) {
		if (response.status >= 200 && response.status < 300) {
			return response;
		} else {
			const error = new Error(`HTTP Error ${response.statusText}`);
			error.status = response.status;
			let res = await response.json();
			error.message = res.message;
			console.log(error);
			throw error;
		}
	}

	// abstracted logic for both login and signup for reusability purposes
	doAuthentication(endpoint, body) {
		return this.fetch(`${API_URL}/${endpoint}`, {
			method: 'POST',
			body: JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' }
		});
	}

	login(user) {
		return this.doAuthentication('user/login', user);
	}

	signup(user) {
		return this.doAuthentication('user/register', user);
	}

	// Clear user token and profile data from localStorage
	logout() {
		localStorage.removeItem('token');
	}

	//get user details
	getUserData() {
		return this.fetch(`${API_URL}/user/account`);
	}

	//
	getPlans() {
		return this.fetch(`${API_URL}/subscription/plans`);
	}

	//subscribe user
	subscribeUser(body) {
		console.log(body);
		return this.fetch(`${API_URL}/subscription`, {
			method: 'POST',
			body: JSON.stringify(body)
		});
	}

	//get all movies
	getMovies() {
		return this.fetch(`${API_URL}/movies`);
	}

	//get single Movies
	getMovieById(id) {
		return this.fetch(`${API_URL}/movies/${id}`);
	}

	//send reset password email
	sendPasswordResetMail(body) {
		return this.fetch(`${API_URL}/user/reset-password`, {
			method: 'POST',
			body: JSON.stringify(body)
		});
	}

	//send reset password
	sendPasswordReset(body, token) {
		return this.fetch(`${API_URL}/user/reset-password/${token}`, {
			method: 'POST',
			body: JSON.stringify(body)
		});
	}

	// add movie to list
	AddMovieToList(body) {
		return this.fetch(`${API_URL}/movielist/addtoList`, {
			method: 'POST',
			body: JSON.stringify(body)
		});
	}

	//check if movie exists
	checkIfMovieIsInList(id) {
		return this.fetch(`${API_URL}/movielist/${id}`);
	}
}

export default new AuthService();
