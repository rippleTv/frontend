import React, { Component } from 'react';


class AdminList extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="adminlist--wrapper">
                                <div className="adminlist--header">
                                    <label htmlFor="adminlist--genre">Movie Genre :</label>
                                    <select name="" id="adminlist--genre">
                                        <option value="all">All</option>
                                        <option value="drama">Drama</option>
                                        <option value="comedy">Comedy</option>
                                        <option value="thriller">Thriller</option>
                                    </select>
                                </div>

                                <table className="adminlist--table">
                                    <thead>
                                        <tr>
                                            <th>Movie Title</th>
                                            <th>Category</th>
                                            <th>Date Modified</th>
                                            <th>Size</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>Ije</td>
                                            <td>Drama</td>
                                            <td>09-10-2019</td>
                                            <td>1.2GB</td>
                                        </tr>
                                        <tr>
                                            <td>Omugwo</td>
                                            <td>Comedy</td>
                                            <td>09-10-2019</td>
                                            <td>1GB</td>
                                        </tr>
                                        <tr>
                                            <td>Ayamma</td>
                                            <td>Drama</td>
                                            <td>09-10-2019</td>
                                            <td>340MB</td>
                                        </tr>
                                        <tr>
                                            <td>Lagos Big Boys</td>
                                            <td>Drama</td>
                                            <td>09-10-2019</td>
                                            <td>948MB</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
         );
    }
}
 
export default AdminList;