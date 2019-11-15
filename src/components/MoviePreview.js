import React, { Component } from 'react';
import NavBar from '../common/navbar';
// import previewImg from '../img/homehead.png';
import ImageSlider from '../common/imageSlider';

import Auth from '../utils/AuthService';
import * as ROUTES from '../routes';

class MoviePreview extends Component {
	state = {
		movie: {},
		movies: [],
		loading: true,
		inList: true,
		addtolistLoading: false
	};
	async componentDidMount() {
		try {
			const { movieId } = this.props.match.params;
			let inList = false;
			const [movie, movies, exists] = await Promise.all([
				Auth.getMovieById(movieId),
				Auth.getMovies(),
				Auth.checkIfMovieIsInList(movieId)
			]);

			console.log(exists);
			if (exists.data) {
				inList = true;
			}

			this.setState({
				movie: movie.data,
				movies: movies.data,
				loading: false,
				inList
			});
		} catch (error) {
			if (error.status === 404) this.props.history.push(ROUTES.MOVIES);
		}
	}

	addToList = () => {
		const { movieId } = this.props.match.params;
		this.setState({ addtolistLoading: true });
		Auth.AddMovieToList({ movieId })
			.then(response => {
				console.log(response);
				this.setState({ inList: true, addtolistLoading: false });
			})
			.catch(error => {
				console.log(error);
				this.setState({ addtolistLoading: false });
			});
	};

	redirectToWatch = () => {
		const { movieId } = this.props.match.params;
		this.props.history.push(`/watch/${movieId}`);
	};
	render() {
		const { movie, movies, loading, inList, addtolistLoading } = this.state;
		const filteredMovies = movies.filter(movie => movie.image);
		return (
			<div className="moviepreview--wrapper">
				<img src={movie.poster} alt="" />
				<div className="moviepreview--header">
					<NavBar giveClass="preview--nav" />

					<div className="moviepreview--header__content">
						<div className="moviepreview--hcontent__intro">
							<div className="star--colony">
								<i className="far fa-star"></i>
								<i className="far fa-star"></i>
								<i className="far fa-star"></i>
								<i className="far fa-star"></i>
								<i className="far fa-star"></i>
							</div>
							<span>{movie.releaseYear}</span>
							<span>{movie.genre}</span>
							<span>16+</span>
						</div>
						<h3>{movie.name}</h3>
						<p>{movie.description}</p>
						<div className="preview--button">
							<button
								className="preview--add"
								disabled={inList}
								onClick={this.addToList}
							>
								{addtolistLoading && <span class="spinner"></span>}
								{!addtolistLoading &&
									(inList ? (
										<>
											<i className="fas fa-check"></i> ADDED
										</>
									) : (
										<>
											{' '}
											<i className="fas fa-plus"></i>ADD TO LIST
										</>
									))}
							</button>
							<button className="preview--play" onClick={this.redirectToWatch}>
								<i className="far fa-play-circle"></i> PLAY NOW
							</button>
						</div>
					</div>
				</div>
				{loading && (
					<div className="container" style={{ marginTop: 16 }}>
						<span style={{ fontSize: 16 }}>loading...</span>
					</div>
				)}

				<ImageSlider
					sliderTitle="Related Movies"
					giveClass="moviePreviewSlider"
					movies={filteredMovies}
				/>

				<div className="home--footer"></div>
			</div>
		);
	}
}

export default MoviePreview;
