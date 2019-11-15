import React, { Component } from 'react';

import NavBar from '../common/navbar';

import VideoPlayer from './video/player';
import VideoDetails from './video/video-details';
import ImageSlider from '../common/imageSlider';

import Auth from '../utils/AuthService';
import * as ROUTES from '../routes';

class StreamingPage extends Component {
	state = {
		movie: {}
	};
	async componentDidMount() {
		try {
			const { movieId } = this.props.match.params;
			const { data } = await Auth.getMovieById(movieId);
			this.setState({ movie: data });
		} catch (error) {
			if (error.status === 404) this.history.push(ROUTES.MOVIES);
			console.log(error);
		}
	}
	render() {
		const { movie } = this.state;
		return (
			<div class="streaming-page">
				<header>
					<NavBar></NavBar>
				</header>

				<VideoPlayer movie={movie} />

				<div className="container">
					<VideoDetails movie={movie} />
				</div>
			</div>
		);
	}
}

export default StreamingPage;
