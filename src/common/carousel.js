import React, { Component } from 'react';
import Carousel from 're-carousel'
import NavBar from './navbar';
import Button from './button';


class HomeCarousel extends Component {
    state = {  }
    render() { 
        return ( 
            <Carousel auto loop interval={3000}>
               <div className="homepage--wrapper">
					

				<div className="homepage--head__content">
					<h1>Nollywood Movies</h1>
					<p className="firstP">Enjoy varieties of amazing Nollywood movies</p>
					<p className="lastP">from top notch actors and superstars.</p>
					<Button label="Watch Now" path="/movies" buttonType={true}/>
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
                
                
                <div className="homepage--wrapper">
					<NavBar giveClass="homepage--nav" />

				<div className="homepage--head__content">
					<h1>Nollywood Series</h1>
					<p className="firstP">Enjoy varieties of amazing Nollywood movies</p>
					<p className="lastP">from top notch actors and superstars.</p>
					<Button label="Watch Now" path="/movies" buttonType={true}/>
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
            </Carousel>
         );
    }
}
 
export default HomeCarousel;