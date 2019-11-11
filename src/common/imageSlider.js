import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '../common/imageCard';
import img1 from '../img/img.png';
import img2 from '../img/img1.png';
import img3 from '../img/img2.png';
import img4 from '../img/img3.png';

class ImageSlider extends Component {
	state = {};
	render() {
		const responsive = {
			superLargeDesktop: {
				// the naming can be any, depends on you.
				breakpoint: { max: 4000, min: 3000 },
				items: 5
			},
			desktop: {
				breakpoint: { max: 3000, min: 1124 },
				items: 5,
				slidesToSlide: 4
			},
			tablet: {
				breakpoint: { max: 1124, min: 836 },
				items: 3
			},
			tab: {
				breakpoint: { max: 835, min: 554 },
				items: 2
			},
			mobile: {
				breakpoint: { max: 553, min: 0 },
				items: 1
			}
		};


		return (
			<div className="container">
				<div className={`generic--slider ${this.props.giveClass}`}>
					<h1>{this.props.sliderTitle}</h1>
					<Carousel
						responsive={responsive}
						
						infinite={true}
				
						removeArrowOnDeviceType={['tablet', 'tab', 'mobile']}
						containerClass="slider"
						sliderClass="hit"
						itemClass="floppy"
					>
						{this.props.images.map((data, id) => (
							<Card key={id} image={data.name} />
						))}
					</Carousel>
					
				</div>
			</div>
		);
	}
}

ImageSlider.defaultProps = {
	images: [
		{ name: img1 },
		{ name: img2 },
		{ name: img3 },
		{ name: img4 },
		{ name: img1 },
		
	],
	sliderTitle: 'Coming Soon'
};

export default ImageSlider;
