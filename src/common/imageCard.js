import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class ImageCard extends Component {
	onclick = e => {
		e.preventDefault();
		const { movie } = this.props;
		console.log();
		this.props.history.push(`/preview/${movie._id}`);
		window.location.reload();
	};
	render() {
		const { movie } = this.props;
		const image = movie.image || movie.poster;

		return (
			<Link to={`/preview/${movie._id}`} onClick={this.onclick}>
				<div className={`card ${this.props.giveClass}`}>
					<img src={image} alt={movie.name} />
					<div className="onHover--card">
						<div className="onHover--header">
							{movie.name}
							<div className="div">
								<i className="fas fa-eye"> </i>
								10
							</div>
						</div>

						<div className="onHover--footer">
							<div className="onHover--footer__title">
								<span className="onHover--border">{movie.genre} </span> 120 Mins
							</div>

							<div className="onHover--stars">
								<i className="far fa-star"></i>
								<i className="far fa-star"></i>
								<i className="far fa-star"></i>
								<i className="far fa-star"></i>
								<i className="far fa-star"></i>
							</div>
						</div>
					</div>
				</div>
			</Link>
		);
	}
}

ImageCard.defaultProps = {
	imageTitle: 'OMUGWO'
};

export default withRouter(ImageCard);
