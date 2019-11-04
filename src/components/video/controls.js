import React from 'react';
import { Play, Pause, VolumeUp, Muted, Fullscreen } from '../../common/svg';

export default function Controls({
	paused,
	progress,
	handleSeek,
	muted,
	volume,
	handleVolumeChange,
	handleFullScreenChange,
	handleTogglePlay,
	handleToggleMute
}) {
	return (
		<section class="controls">
			<button type="button" onClick={handleTogglePlay}>
				{paused ? <Play /> : <Pause />}
			</button>

			<div class="progress">
				<progress
					value={progress || 0}
					min="0"
					max="100"
					onChange={handleSeek}
					onClick={handleSeek}
				></progress>
			</div>

			<button onClick={handleToggleMute}>
				{muted ? <Muted /> : <VolumeUp />}
			</button>

			<input
				type="range"
				title="volume"
				onChange={handleVolumeChange}
				min="0"
				max="1"
				step="0.1"
				value={volume}
			/>

			<button onClick={handleFullScreenChange}>
				<Fullscreen />
			</button>
		</section>
	);
}
