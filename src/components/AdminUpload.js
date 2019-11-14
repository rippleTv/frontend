import React, { Component } from 'react';

class AdminUpload extends Component {
    state = { 
        fileBrowserText1: "Choose a file",
        fileBrowserText2: "Choose a file"
     }

     handleChange1 = (event) => {
        
        if (event.target.files[0]) {
           this.setState({
            fileBrowserText1: event.target.files[0].name,
            fileBrowserText2: this.state.fileBrowserText2
           })
          }
     }

     handleChange2 = (event) => {
        
        if (event.target.files[0]) {
           this.setState({
               fileBrowserText1: this.state.fileBrowserText1,
                fileBrowserText2: event.target.files[0].name
           })
          }
     }
    render() { 
        return ( 
            <div className="adminupload--wrapper">
                            <h3>Upload Movie</h3>
                            <div className="adminupload--form__section">
                                <form className="adminupload--form1">
                                    <label htmlFor="">Movie title</label>
                                    <input  className="textbox" type="text" placeholder="Ije"/>

                                    <label htmlFor="">Movie Description</label>
                                    <textarea className="textarea" wrap="soft" >
                                        Chioma left Nigeria for the USA to help her sister that was accused of
                                        killing three people including her husband
                                        She is determined to keep her from jail but requires the truth.
                                    </textarea>
                                </form>

                                <div className="adminupload--form2">
                                    <label htmlFor="">Movie Genre</label>
                                    <select name="" id="adminupload--dropdown">
                                        <option value="comedy">Comedy</option>
                                        <option value="drama">Drama</option>
                                        <option value="thriller">Thriller</option>
                                    </select>

                                    <label htmlFor="">Movie</label>
                                    <div className="file--browser">
                                        <span className="file--browser__text">{this.state.fileBrowserText1}</span>
                                        <input type="file" id="myuniqueid1" onChange={(e) => this.handleChange1(e)}/>
                                        <label htmlFor="myuniqueid1">Browse</label>
                                    </div>

                                    <label htmlFor="">Poster</label>
                                    <div className="file--browser">
                                        <span className="file--browser__text">{this.state.fileBrowserText2}</span>
                                        <input type="file" id="myuniqueid2" onChange={(e) => this.handleChange2(e)}/>
                                        <label htmlFor="myuniqueid2">Browse</label>
                                    </div>
                                    <button className="upload--btn">Upload <i className="fas fa-cloud-upload-alt"></i></button>

                                    
                                </div>
                            </div>
                        </div>
         );
    }
}
 
export default AdminUpload;