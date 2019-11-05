import React, { Component } from 'react';
import NavBar from '../common/navbar';
import Button from '../common/button';
import ImageSlider from '../common/imageSlider';
import DropDown from '../common/dropdown';

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
							Enjoy varieties of amazing Nollywood movies
						</p>
						<p className="lastP">from top notch actors and superstars.</p>
						<Button label="Watch Now" buttonType={true} />
					</div>
				</div>

				<div className="seriespage--middle">
					<div className="seriespage--middle__titles">
						<h3>Genre</h3>
						<div className="seriespage--drops">
							Drama{' '}
							<i
								onClick={() => this.handleDrop('genre')}
								className="fas fa-chevron-down"
							></i>
						</div>
					</div>
					{this.state.displayGenre && (
						<DropDown
							giveClass="genre--dropdown"
							contents={['Drama', 'Comedy', 'Thriller']}
						/>
					)}
					<div className="seriespage--middle__titles">
						<h3>Release Date</h3>
						<div className="seriespage--drops">
							2019{' '}
							<i
								onClick={() => this.handleDrop('date')}
								className="fas fa-chevron-down"
							></i>
						</div>
					</div>

					{this.state.displayDate && (
						<DropDown
							giveClass="date--dropdown"
							contents={['2019', '2018', '2017']}
						/>
					)}

					<div className="seriespage--middle__titles">
						<h3>Quality</h3>
						<div className="seriespage--drops">
							HD{' '}
							<i
								onClick={() => this.handleDrop('quality')}
								className="fas fa-chevron-down"
							></i>
						</div>
					</div>

					{this.state.displayQuality && (
						<DropDown
							giveClass="quality--dropdown"
							contents={['HD', 'Webp', 'Avi']}
						/>
					)}
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
