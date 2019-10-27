import React, { Component } from 'react'; 
import Ticker from 'react-ticker' 
import slider from '../img/sliderimage.png'
import ripple from '../img/Ripple-Logo.png'
import * as ROUTES from '../routes';



class LandingPage extends Component {
	state = { 
		move: true,
		sliderAnim: "pause"
	 }
	handleClick = ()=>{
		const { move: moving, sliderAnim } = this.state;
		let anim;
		let move= moving;
		move = !move;
		if(sliderAnim === "play"){
			anim="pause"
		}
		if(sliderAnim === "pause"){
			anim="play"
		}
		this.setState({ move, sliderAnim: anim })
	}

	handleSignUp = () => {
		this.props.history.push(ROUTES.SIGN_UP);
	}

	handleSignIn = () => {
		this.props.history.push(ROUTES.SIGN_IN);
	}

	
	render() { 
		return ( 
			<div className="landing-page">
				<Ticker  speed={5} mode='chain' move={ this.state.move}>
					{({ index }) => (
						<>
							<img src={slider} alt="slider" width="1152px" height="662px" style={{margin:0, padding:0}}/>
						</>
					)}
				</Ticker>

				<div className="landing--wrapper">
						<div className="landing--header">
							<img src={ripple} width="135" height="36" alt=""/>
							<button className="landing--login" onClick={this.handleSignIn}>LOG IN</button>
						</div>

						<div className="landing--body">
							<h1>The Best Of Nollywood</h1>
							<p>Thousands of movies. Watch on any device</p>
							<button onClick={this.handleSignUp}>START WATCHING</button>
						</div>
						
						<div className="landing--footer">
							<div className="footer--icons">
								<i className="fab fa-instagram"></i>
								<i className="fab fa-facebook"></i>
								<i className="fab fa-twitter"></i>
							</div>
								<i className={`far fa-${this.state.sliderAnim}-circle`} onClick={this.handleClick}></i>
								
						</div>
				</div>	
			</div>
		 );
	}
}
 
export default LandingPage;
