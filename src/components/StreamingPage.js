import React, { Component } from 'react';

import NavBar from '../common/navbar';

import VideoPlayer from './video/player';
import VideoDetails from './video/video-details';
import ImageSlider from '../common/imageSlider';

const manifestUri =
	'https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd';

class StreamingPage extends Component {
	render() {
		return (
			<div class="streaming-page">
				<header>
					<NavBar></NavBar>
				</header>

				<VideoPlayer src={manifestUri} />

				<div className="container">
					<VideoDetails />
				</div>

				<ImageSlider sliderTitle="Recommended" giveClass="w-100" />
			</div>
		);
	}
}

export default StreamingPage;
