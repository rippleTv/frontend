import React, { Component } from 'react';
import Button from '../common/button';

class UserProfile extends Component {
    state = {  }
    render() { 
        return ( 
           <React.Fragment>
               <i className="fas fa-user-circle user--profile"></i>

               <form className="userdash">
                   <input type="text" placeholder="Name"/>
                   <input type="text" placeholder="E-mail"/>
                   <input type="text" placeholder="Phone Number"/>
                  <div className="radio">
                  <label htmlFor="gender">Gender</label>
                  <span><input type="radio" name="gender" value="male"/>Male </span>
                  <span><input type="radio" name="gender" value="female"/>Female</span>
                  </div>
                  <select>
                    <option value="volvo">Cuba</option>
                    <option value="saab">Dominican Republic</option>
                    <option value="mercedes">Haiti</option>
                    <option value="audi">Puerto Rico</option>
                    <option value="audi">Trinidad and Tobago</option>
                    <option value="audi">Jamaica</option>
                    <option value="audi">Martinique</option>
                 </select>
               </form>

               <Button label="Save Changes" buttonType={true} />
           </React.Fragment>
         );
    }
}
 
export default UserProfile;