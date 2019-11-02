import React, { Component } from 'react';
import NavBar from '../common/navbar'
import Button from '../common/button'
import ImageSlider from '../common/imageSlider'
import DropDown from '../common/dropdown'


class ListPage extends Component {
    state = { 
        displayGenre: false,
        displayDate: false,
        displayQuality: false
     }

     handleDrop = (display) => {
        
        if (display == "my list")
        this.setState({
        displayGenre: !this.state.displayGenre,
        displayDate: false,
        displayQuality: false
        })

        // if (display == "date")
        // this.setState({
        // displayGenre: false,
        // displayDate: !this.state.displayDate,
        // displayQuality: false
        // })

        // if (display == "quality")
        // this.setState({
        // displayGenre: false,
        // displayDate: false,
        // displayQuality: !this.state.displayQuality
        // })
     }

    render() { 
        return ( 
            <div className="listpage">
                <div className="listpage__header">
                    <NavBar giveClass="listpage__nav"/>

                    <div className="listpage__head">
                        <h1>My List</h1>
                        <p className="firstP">Create a playlist of your favourite movie and series</p>
                        <p className="lastP">to form your very own library.</p>
				    </div>
                </div>

                <div className="listpage__middle">
                    <div className="listpage__filter">
                        <h3>Category</h3>
                        <div className="listpage__drops">
                            My List <i onClick={() => this.handleDrop("my list")} className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    {this.state.displayGenre && <DropDown giveClass="list__dropdown" contents={["Drama", "Comedy", "Thriller"]}/>}
                    
                </div>
               

                <ImageSlider sliderTitle=""/>
                <ImageSlider sliderTitle="" />
            

                <div className="home__footer">

				</div>

            </div>
         );
    }
}
 
export default ListPage;