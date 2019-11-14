import React, { Component } from 'react';
import NavBar from '../common/navbar';
import ImageSlider from '../common/imageSlider';

import Auth from '../utils/AuthService';

class MoviesPage extends Component {
	state = {
		loading: false,
		movies: []
	};

	componentDidMount() {
		this.setState({ loading: true });
		Auth.getMovies()
			.then(response => {
				this.setState({ movies: response.data, loading: false });
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		console.log('IN MOVIES PAGE');
		const { loading, movies } = this.state;
		console.log(movies);
		return (
			<div className="moviespage">
				<div className="moviespage--header">
					<NavBar giveClass="seriespage--nav" />

					<div className="homepage--head__content moviespage--head__content">
						<h1>Nollywood Movies</h1>
						<p className="firstP">
							Enjoy varieties of amazing Nollywood movies
						</p>
						<p className="lastP">from top notch actors and superstars.</p>
					</div>
				</div>

				<div className="moviespage--middle">
					<div className="moviespage--middle__titles">
						<h3>Genre</h3>
						<select name="" id="">
							<option value="comedy">Comedy</option>
							<option value="drama">Drama</option>
							<option value="thriller">Thriller</option>
						</select>
					</div>

					<div className="moviespage--middle__titles">
						<h3>Release Date</h3>
						<select name="" id="">
							<option value="2019">2019</option>
							<option value="2018">2018</option>
							<option value="2017">2017</option>
						</select>
					</div>

					<div className="moviespage--middle__titles">
						<h3>Quality</h3>
						<select name="" id="">
							<option value="HD">HD</option>
							<option value="webp">Webp</option>
							<option value="avi">Avi</option>
						</select>
					</div>
				</div>
				<div className="container">
					{loading && <span style={{ fontSize: 16 }}>loading...</span>}
				</div>
				<ImageSlider sliderTitle="Coming Soon" movies={movies} />
				<div className="movies--border"></div>
				<ImageSlider sliderTitle="Popular" movies={movies} />
				<div className="movies--border"></div>
				<ImageSlider sliderTitle="Trending" movies={movies} />

				<div className="home--footer"></div>
			</div>
		);
	}
}

export default MoviesPage;
