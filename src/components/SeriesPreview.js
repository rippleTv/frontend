import React, { Component } from 'react';
import NavBar from '../common/navbar';
import previewImg from '../img/homehead.png'
import seriescard from '../img/seriescard.png'
import ImageSlider from '../common/imageSlider';
import PreviewCard from '../common/previewCard';

class SeriesPreview extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="seriespreview--wrapper">

                <img src={previewImg} alt=""/>
                <div className="seriespreview--header">
                    <NavBar giveClass="preview--nav"/>
                    
                    <div className="seriespreview--header__content">
                        <div className="seriespreview--hcontent__intro">
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

                <div className="seriespreview--middle">
					<div className="seriespreview--middle__titles">
						<h3>Season</h3>
						<select name="" id="">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</div>
					
					<div className="seriespreview--middle__titles">
						<h3>Quality</h3>
						<select name="" id="">
							<option value="HD"> HD</option>
							<option value="Webp"> Webp</option>
							<option value="Avi">Avi</option>
						</select>
					</div>

				</div>
                <div className="previewcard--grid">
                    <PreviewCard />
                    <PreviewCard />
                    <PreviewCard />
                    <PreviewCard />
                    <PreviewCard />
                    <PreviewCard />
                </div>
                <hr/>

                <ImageSlider sliderTitle="Related Series" giveClass="seriesPreviewSlider"/>

                <div className="home--footer"></div>
        </div>
         );
    }
}
 
export default SeriesPreview;