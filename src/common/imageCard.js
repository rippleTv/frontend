import React, { Component } from 'react';


class ImageCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={`card ${this.props.giveClass}`}  >
                <img src={this.props.image} alt=""/>
                <div className="onHover--card">
                    <div className="onHover--header">
                        {this.props.imageTitle}
                        <div className="div">
                        <i className="fas fa-eye"> </i>
                            200 
                        </div>
                    </div>

                    <div className="onHover--footer">
                        <div className="onHover--footer__title">
                            <span className="onHover--border">Drama </span> 120 Mins 
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

         );
    }
}
 
ImageCard.defaultProps={
    imageTitle : "OMUGWO"
}

export default ImageCard;