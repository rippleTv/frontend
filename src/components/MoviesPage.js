import React, { Component } from 'react';
import Drop from '../common/dropdown';
import NavBar from './../common/navbar';


class Movies extends Component {
    state = { 
        displayGenre: false,
        displayDate: false,
        displayQuality: false
     }

     handleDropDown = ( display ) => {

        if(display == "Date")
            this.setState(prevState => ({ displayDate: !prevState.displayDate, displayGenre: false, displayQuality: false }))
    
            if(display == "Genre")
            this.setState(prevState => ({ displayGenre: !prevState.displayGenre, displayDate: false, displayQuality: false }))
    
            if(display == "Quality")
            this.setState(prevState => ({ displayQuality: !prevState.displayQuality, displayGenre: false, displayDate: false}))

        
       
         
     }

    render() { 
        return ( 
            <section className="movies__page">
    <div className="movies__header">
        
        <NavBar giveClass={"movie__navbar"} />
    
        <div className="header__text">
        <h1>Nollywood Movies</h1>
        <h3>Enjoy varieties of amazing nollywood movies
            from top notch actors and superstars.
        </h3>
    
        </div>
    </div>
    <div className="movies__body">
        <div className="movies__filter">
            <div className="category">
                <h1>Genre</h1>
                <div className="sub-category">
                    Drama <i className="fas fa-angle-down" onClick={() => this.handleDropDown("Genre")}></i>

                </div>
                {this.state.displayGenre && <Drop contents={['Drama','Action','Horror','Thriller','Comedy']} />}
            </div>
            <div className="category">
                <h1>Release Date</h1>
                <div className="sub-category">
                        2019 <i className="fas fa-angle-down" onClick={() => this.handleDropDown("Date")}></i>

                    </div>
                    {this.state.displayDate && <Drop contents={['2019','2018','2017']} />}
                </div>
                <div className="category">
                <h1>Quality</h1>
                <div className="sub-category">
                        HD <i className="fas fa-angle-down" onClick={() => this.handleDropDown("Quality")}></i>

                    </div>
                    {this.state.displayQuality && <Drop contents={['HD', '1080p', '720p', '480p']} />}
                </div>
        </div>

    </div>

</section>
         );
    }
}
 
export default Movies;


