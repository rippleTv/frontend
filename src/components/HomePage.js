import React, { Component } from 'react';
import Ticker from 'react-ticker';
import headerpic from '../img/homehead.png';
import end from '../img/homefooter.png';
import NavBar from './../common/navbar';
import Button from '../common/button';

class HomePage extends Component {
	state = {
		move: true,
		sliderAnim: 'pause'
	};
	handleClick = () => {
		const { move: moving, sliderAnim } = this.state;
		let anim;
		let move = moving;
		move = !move;
		if (sliderAnim === 'play') {
			anim = 'pause';
		}
		if (sliderAnim === 'pause') {
			anim = 'play';
		}
		this.setState({ move, sliderAnim: anim });
	};

	render() {
		return (
			<div className="homepage">
				<Ticker speed={5} mode="chain" move={this.state.move} height={657}>
					{({ index }) => (
						<>
							<img
								className="ticker__img"
								src={headerpic}
								alt="slider"
								width="1152px"
								height="690px"
								style={{ margin: 0, padding: 0 }}
							/>
						</>
					)}
				</Ticker>

				<div className="homepage--wrapper">
					<NavBar giveClass="homepage--nav" />

					<div className="homepage--head__content">
						<h1>Nollywood Movies</h1>
						<p className="firstP">
							Enjoy varieties of amazing Nollywood movies
						</p>
						<p className="lastP">from top notch actors and superstars.</p>
						<Button label="Watch Now" buttonType={true} />
					</div>

					<div className="homepage--head__footer">
						<div className="footer--icons">
							<i className="fab fa-instagram"></i>
							<i className="fab fa-facebook"></i>
							<i className="fab fa-twitter"></i>
						</div>
						<i
							className={`far fa-${this.state.sliderAnim}-circle`}
							onClick={this.handleClick}
						></i>
					</div>
				</div>

				<div className="homepage--middle">
					<div className="homepage--middle__content">
						<h1>Top Actors</h1>
						<p className="middle--firstP">Catch up with your favorite</p>
						<p>Nollywood Stars</p>
						<p className="middle--lastP">
							on <span className="home--highlight">RIPPLE</span>
						</p>
						<Button label="Watch Now" giveClass="home--middle__button" />
					</div>
				</div>
				<div className="homepage--end">
					<div className="homepage--end__content">
						<h1>Watch everywhere</h1>
						<p>Stream unlimited nollywood movies and</p>
						<p>series on your phone, tablet, laptop and TV</p>
						<p>without paying more.</p>
					</div>
					<img src={end} alt="Tv-Screens" />
				</div>

				<div className="home--footer"></div>
			</div>
		);
	}
}

export default HomePage;
