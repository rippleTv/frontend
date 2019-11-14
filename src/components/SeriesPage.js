import React, { Component } from 'react';
import NavBar from '../common/navbar';
import ImageSlider from '../common/imageSlider';


class SeriePage extends Component {
	state = {
		displayGenre: false,
		displayDate: false,
		displayQuality: false
	};

	handleDrop = display => {
		if (display === 'genre')
			this.setState({
				displayGenre: !this.state.displayGenre,
				displayDate: false,
				displayQuality: false
			});

		if (display === 'date')
			this.setState({
				displayGenre: false,
				displayDate: !this.state.displayDate,
				displayQuality: false
			});

		if (display === 'quality')
			this.setState({
				displayGenre: false,
				displayDate: false,
				displayQuality: !this.state.displayQuality
			});
	};

	render() {
		return (
			<div className="seriespage">
				<div className="seriespage--header">
					<NavBar giveClass="seriespage--nav" />

					<div className="homepage--head__content seriespage--head__content">
						<h1>Nollywood Series</h1>
						<p className="firstP">
							Enjoy varieties of amazing Nollywood series
						</p>
						<p className="lastP">from top notch actors and superstars.</p>
						
					</div>
				</div>

				<div className="seriespage--middle">
					<div className="seriespage--middle__titles">
						<h3>Genre</h3>
						<select name="" id="">
							<option value="comedy">Comedy</option>
							<option value="drama">Drama</option>
							<option value="thriller">Thriller</option>
						</select>
					</div>
					
					<div className="seriespage--middle__titles">
						<h3>Release Date</h3>
						<select name="" id="">
							<option value="2019">2019</option>
							<option value="2018">2018</option>
							<option value="2017">2017</option>
						</select>
					</div>


					<div className="seriespage--middle__titles">
						<h3>Quality</h3>
						<select name="" id="">
							<option value="HD">HD</option>
							<option value="webp">Webp</option>
							<option value="avi">Avi</option>
						</select>
					</div>
				</div>

				<ImageSlider sliderTitle="Coming Soon" />
				<div className="series--border"></div>
				<ImageSlider sliderTitle="Popular" />
				<div className="series--border"></div>
				<ImageSlider sliderTitle="Trending" />

				<div className="home--footer"></div>
			</div>
		);
	}
}

export default SeriePage;
