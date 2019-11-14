import React from 'react';
import { View, StarRatings } from '../../common/svg';
import Button from '../../common/button';

export default function videoDetails({ movie }) {
	return (
		<section className="video__details">
			<section className="video__info">
				<h2>{movie.name}</h2>
				<div>
					<span className="views">
						<View></View>10
					</span>

					<Button
						buttonType="yellow-button"
						label="ADD TO LIST"
						width="143px"
					/>
				</div>
			</section>
			<section className="video__stats">
				<StarRatings />|<span>{movie.genre}</span>|<span>38 min</span>
			</section>
			<section className="description">
				<article>{movie.description}</article>
			</section>
		</section>
	);
}
