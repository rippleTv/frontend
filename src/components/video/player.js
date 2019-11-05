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
		buffering: false
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

			const loaded = await this.player.load(this.props.src);
			// This runs if the asynchronous load is successful.
			console.log('Video Loaded');
			this.setState({ showControls: true });
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
		const percent = (videoElem.currentTime / videoElem.duration) * 100;
		this.setState({ progress: percent });
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
			buffering
		} = this.state;
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
					poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
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
					/>
				)}
			</section>
		);
	}
}
