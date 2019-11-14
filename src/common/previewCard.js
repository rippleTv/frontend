import React, { Component } from 'react';
import seriescard from '../img/seriescard.png';

class PreviewCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="previewcard">
                    <img src={seriescard} alt=""/>
                    <div className="previewcard--footer">
                        <span className="previewcard--text1" style={{paddingLeft: "0px"}}>Episode 1</span>
                        <span className="previewcard--text2">Episode title</span>
                        <span className="previewcard--text3">43mins</span>
                        <i class="fas fa-heart"></i>
                    </div>

            </div>
         );
    }
}
 
export default PreviewCard;