import React, { Component } from 'react';
import NavBar from '../common/navbar';
import previewImg from '../img/homehead.png'
import ImageSlider from '../common/imageSlider';


class MoviePreview extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="moviepreview--wrapper">

                <img src={previewImg} alt=""/>
                <div className="moviepreview--header">
                    <NavBar giveClass="preview--nav"/>
                    
                    <div className="moviepreview--header__content">
                        <div className="moviepreview--hcontent__intro">
                            <div className="star--colony">
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <span>2015</span>
                            <span>Drama</span>
                            <span>16+</span>
                        </div>
                        <h3>Ije</h3>
                        <p> Chioma left Nigeria for the USA to help her sister that was accused of
                            killing three people including her husband
                            She is determined to keep her from jail but requires the truth.
                        </p>
                        <div className="preview--button">
                            <button className="preview--add"><i className="fas fa-plus"></i> ADD TO LIST</button>
                            <button className="preview--play"><i className="far fa-play-circle"></i> PLAY NOW</button>
                        </div>
                    

                    </div>
                </div>

                <ImageSlider sliderTitle="Related Movies" giveClass="moviePreviewSlider"/>

                <div className="home--footer"></div>
            </div>
                 );
    }
}
 
export default MoviePreview;