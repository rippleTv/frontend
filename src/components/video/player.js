import React, { Component } from 'react';
import shaka from 'shaka-player';

import Controls from './controls';
import { RequestStartVideo } from '../../common/svg';
import BufferIcon from '../../img/icon-buffering.png';

export default class player extends Component {
	state = {
		paused: true,
		volume: '1',
		muted: false,
		progress: 0,
		fullscreen: false,
		showControls: false,
		buffering: false,
		currentTime: 0,
		duration: 0
	};

	componentDidMount() {
		document.addEventListener('fullscreenchange', e => {
			this.setState({
				fullscreen: !!(document.fullScreen || document.fullscreenElement)
			});
		});

		// Install built-in polyfills to patch browser incompatibilities.
		shaka.polyfill.installAll();

		// Check to see if the browser supports the basic APIs Shaka needs.
		if (shaka.Player.isBrowserSupported()) {
			// Everything looks good!
			this.initPlayer();
		} else {
			// This browser does not have the minimum set of APIs we need.
			console.error('Browser not supported!');
		}
	}

	requestVideoStart = async () => {
		try {
			console.log('Requesting Video Starting');
			const videoElem = this.refs.video;
			videoElem.play();

			await this.player.load(this.props.movie.dash);
			// This runs if the asynchronous load is successful.
			console.log('Video Loaded');
			this.setState({ showControls: true, duration: videoElem.duration });

			console.log(videoElem.duration);
		} catch (error) {
			this.onError(error);
		}
	};

	onBufferChange = e => {
		this.setState({ buffering: e.buffering });
	};

	handleFullScreenChange = () => {
		const { fullscreen } = this.state;
		const videoElem = this.refs.video;
		if (!fullscreen) {
			if (videoElem.requestFullscreen) videoElem.requestFullscreen();
			else if (videoElem.mozRequestFullScreen) videoElem.mozRequestFullScreen();
			else if (videoElem.webkitRequestFullScreen) {
				// Safari 5.1 only allows proper fullscreen on the video element. This also works fine on other WebKit browsers as the following CSS (set in styles.css) hides the default controls that appear again, and
				// ensures that our custom controls are visible:
				// figure[data-fullscreen=true] video::-webkit-media-controls { display:none !important; }
				// figure[data-fullscreen=true] .controls { z-index:2147483647; }
				videoElem.webkitRequestFullScreen();
			} else if (videoElem.msRequestFullscreen) videoElem.msRequestFullscreen();
			this.setState({ fullscreen: true });
		} else {
			if (document.exitFullscreen) document.exitFullscreen();
			else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
			else if (document.webkitCancelFullScreen)
				document.webkitCancelFullScreen();
			else if (document.msExitFullscreen) document.msExitFullscreen();
			this.setState({ fullscreen: false });
		}
	};

	initPlayer = () => {
		this.player = new shaka.Player(this.refs.video);

		// Listen for error events.
		this.player.addEventListener('error', this.onError);

		this.player.addEventListener('buffering', this.onBufferChange);

		// Try to load a manifest.
		// This is an asynchronous process.
	};

	onError = error => {
		console.error('Error code', error.code, 'object', error);
	};

	handleTogglePlay = () => {
		const videoElem = this.refs.video;

		this.setState({
			paused: videoElem.paused
		});
		if (videoElem.paused) {
			videoElem.play();
		} else {
			videoElem.pause();
		}
	};

	handleVolumeChange = e => {
		const videoElem = this.refs.video;
		videoElem.volume = e.target.value;
		this.setState({ volume: e.target.value });
	};

	handleVideoTimeUpdate = () => {
		const videoElem = this.refs.video;
		console.log(videoElem.duration);
		console.log(videoElem.currentTime);
		const percent = (videoElem.currentTime / videoElem.duration) * 100;
		this.setState({ progress: percent, currentTime: videoElem.currentTime });
	};

	toggleMute = () => {
		const videoElem = this.refs.video;
		this.setState({ muted: !videoElem.muted });
		videoElem.muted = !videoElem.muted;
	};

	handleSeek = e => {
		const videoElem = this.refs.video;
		const pos =
			(e.pageX - (e.target.offsetLeft + e.target.offsetParent.offsetLeft)) /
			e.target.offsetWidth;
		videoElem.currentTime = pos * videoElem.duration;
	};
	render() {
		const {
			paused,
			volume,
			progress,
			muted,
			showControls,
			buffering,
			currentTime,
			duration
		} = this.state;

		const { movie } = this.props;
		return (
			<section className="video-player">
				<button className="play__button" onClick={this.requestVideoStart}>
					{!showControls && <RequestStartVideo />}
				</button>

				{showControls && buffering && (
					<div className="video__buffering">
						<img src={BufferIcon} alt="loading..."></img>
					</div>
				)}
				<video
					ref="video"
					poster={movie.poster}
					onTimeUpdate={this.handleVideoTimeUpdate}
				></video>

				{showControls && (
					<Controls
						paused={paused}
						progress={progress}
						muted={muted}
						volume={volume}
						handleSeek={this.handleSeek}
						handleVolumeChange={this.handleVolumeChange}
						handleFullScreenChange={this.handleFullScreenChange}
						handleTogglePlay={this.handleTogglePlay}
						handleToggleMute={this.toggleMute}
						currentTime={currentTime}
						duration={duration}
					/>
				)}
			</section>
		);
	}
}

player.defaultProps = {
	dash:
		'https://res.cloudinary.com/dqfn8m6ti/video/upload/sp_hd/v1573129951/THE_WEDDING_PARTY.mpd',
	poster:
		'https://res.cloudinary.com/dqfn8m6ti/image/upload/v1573114594/black-1072366_640.jpg'
};
