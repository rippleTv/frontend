import React, { Component } from 'react'; 
import Ticker from 'react-ticker' 
import slider from '../img/sliderimage.png'
import ripple from '../img/Ripple-Logo.png'


class LandingPage extends Component {
	state = { 
		move: true,
		btn: "pause"
	 }
	handleClick = ()=>{
		let move= this.state.move;
		move = !move;
		let btn;
		if(this.state.btn === "play"){
			btn="pause"
		}
		if(this.state.btn === "pause"){
			btn="play"
		}
		this.setState({ move, btn })
	}

	
	render() { 
		return ( 
			<div className="landing-page">
				<Ticker  speed={5} mode='chain' move={ this.state.move}>
					{({ index }) => (
					<>
						
						<img src={slider} alt="" style={{margin:0, padding:0}}/>
					</>
						)}
				</Ticker>

				<div className="landing--wrapper">
						<div className="landing--header">
							<img src={ripple} width="135" height="36" alt=""/>
							<button className="landing--login">LOG IN</button>
						</div>

						<div className="landing--body">
							<h1>The best of Nollywood</h1>
							<p>Thousands of movies. Watch on any device</p>
							<button>START WATCHING</button>
						</div>

						<div className="landing--footer">
							<div className="footer--icons">
								<i className="fab fa-instagram"></i>
								<i className="fab fa-facebook"></i>
								<i className="fab fa-twitter"></i>
							</div>
								<i className={`far fa-${this.state.btn}-circle`} onClick={this.handleClick}></i>
								
						</div>
				
				</div>	
			</div>
		 );
	}
}
 
export default LandingPage;
