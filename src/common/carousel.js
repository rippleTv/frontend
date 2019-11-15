import React, { Component } from 'react';
// import Carousel from 're-carousel'
import NavBar from './navbar';
import Button from './button';

class HomeCarousel extends Component {
	state = {};
	render() {
		return (
			<div style={{ backgroundColor: 'tomato', height: '100%' }}>Frame 1</div>

			// <Carousel auto>
			// 	<div style={{backgroundColor: 'tomato', height: '100%'}}>Frame 1</div>
			// 	<div style={{backgroundColor: 'orange', height: '100%'}}>Frame 2</div>
			// 	<div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
			// </Carousel>

			// <Carousel auto loop interval={3000}>
			// 	<div>
			// 		home
			// 	</div>
			// 	<div>
			// 		movie
			// 	</div>
			// 	<div>
			// 		heeee
			// 	</div>
			//    {/* <div className="homepage--wrapper">
			// 		<NavBar />

			// 	<div className="homepage--head__content">
			// 		<h1>Nollywood Movies</h1>
			// 		<p className="firstP">Enjoy varieties of amazing Nollywood movies</p>
			// 		<p className="lastP">from top notch actors and superstars.</p>
			// 		<Button label="Watch Now" path="/movies" buttonType={true}/>
			// 	</div>

			// 		<div className="homepage--head__footer">
			// 			<div className="footer--icons">
			// 				<i className="fab fa-instagram"></i>
			// 				<i className="fab fa-facebook"></i>
			// 				<i className="fab fa-twitter"></i>
			// 			</div>
			// 			<i
			// 				className={`far fa-${this.state.sliderAnim}-circle`}
			// 				onClick={this.handleClick}
			// 			></i>
			// 		</div>
			// 	</div>

			//     <div className="homepage--wrapper">
			// 		<NavBar giveClass="homepage--nav" />

			// 	<div className="homepage--head__content">
			// 		<h1>Nollywood Series</h1>
			// 		<p className="firstP">Enjoy varieties of amazing Nollywood movies</p>
			// 		<p className="lastP">from top notch actors and superstars.</p>
			// 		<Button label="Watch Now" path="/movies" buttonType={true}/>
			// 	</div>

			// 		<div className="homepage--head__footer">
			// 			<div className="footer--icons">
			// 				<i className="fab fa-instagram"></i>
			// 				<i className="fab fa-facebook"></i>
			// 				<i className="fab fa-twitter"></i>
			// 			</div>
			// 			<i
			// 				className={`far fa-${this.state.sliderAnim}-circle`}
			// 				onClick={this.handleClick}
			// 			></i>
			// 		</div>
			// 	</div> */}
			// </Carousel>
		);
	}
}

export default HomeCarousel;
