import React from 'react';
import { Play, Pause, VolumeUp, Muted, Fullscreen } from '../../common/svg';
import formatTime from '../../utils/formatTime';

export default function Controls({
	paused,
	progress,
	handleSeek,
	muted,
	volume,
	handleVolumeChange,
	handleFullScreenChange,
	handleTogglePlay,
	handleToggleMute,
	currentTime,
	duration
}) {
	return (
		<section class="controls">
			<div class="progress">
				<progress
					value={progress || 0}
					min="0"
					max="100"
					onChange={handleSeek}
					onClick={handleSeek}
				></progress>
				<span className="duration">
					{formatTime(currentTime)} / {formatTime(duration)}
				</span>
			</div>

			<section className="control__buttons">
				<button type="button" onClick={handleTogglePlay}>
					{paused ? <Pause /> : <Play />}
				</button>
				<div className="space"></div>
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
		</section>
	);
}
