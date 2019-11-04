import React, { Component } from 'react';
import NavBar from '../common/navbar'
import ImageCard from "../common/imageCard";
import DropDown from '../common/dropdown';
import img1 from "../img/img.png";
import img2 from "../img/img1.png";
import img3 from "../img/img2.png";
import img4 from "../img/img3.png";


class ListPage extends Component {
    state = { 
        displayGenre: false,
        displayDate: false,
        displayQuality: false,
        imageData: [
            {name: "Omugwo", image: img1},
            {name: "Mokalik", image: img2},
            {name: "Ayamma", image: img3},
            {name: "ije", image: img4},
            {name: "Omugwo", image: img1},
            {name: "Mokalik", image: img2},
            {name: "Ayamma", image: img3},
            {name: "Ije", image: img4},
        ]
     }

     handleDrop = (display) => {
        
        if (display == "my list")
        this.setState({
        displayGenre: !this.state.displayGenre,
        displayDate: false,
        displayQuality: false
        })

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
                    {/* <div className="listpage__filter">
                        <h3>Category</h3>
                        <div className="listpage__drops">
                            My List <i onClick={() => this.handleDrop("my list")} className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    {this.state.displayGenre && <DropDown giveClass="list__dropdown" contents={["Drama", "Comedy", "Thriller"]}/>} */}
                    
                </div>

                <div className="listpage--body">
                    {this.state.imageData.map((data)=> {
                        return  <ImageCard imageTitle= {data.name} image={data.image}/>
                    })}
                </div>

               
            

            </div>


         );
    }
}
 
export default ListPage;