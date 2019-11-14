import React, { Component } from 'react';
import AdminNav from '../common/adminNav';
import AdminUpload from './AdminUpload';
import AdminList from './AdminList';
import AdminPayment from './AdminPayment';

class Admin extends Component {
    state={
            routeText: "upload"
    }

    handleRoute = (route) => {
       this.setState({
           routeText: route
       })
    }
    render() { 
        let area, uploadActive, listActive, paymentActive, logActive;
        const { routeText:path } = this.state;

        switch(path){
            case "upload":
                area =<AdminUpload />
                uploadActive="admin--active"
                listActive=""
                paymentActive=""
                logActive=""
            break;

            case "list":
                area =<AdminList />
                uploadActive=""
                listActive="admin--active"
                paymentActive=""
                logActive=""
            break;

            case "payment":
                area =<AdminPayment />
                uploadActive=""
                listActive=""
                paymentActive="admin--active"
                logActive=""
            break;

        }


        return ( 
            <div className="admin-wrapper">
                <AdminNav handleRoute={this.handleRoute}/>
                <div className="admin--body">
                    <div className="admin--sidebar">
                        <ul className="admin--sidebar__content">
                            <li className={`admin--sidebar__items ${uploadActive}`} onClick={() => this.handleRoute("upload")}>Movie Uploads </li>
                            <li className={`admin--sidebar__items ${listActive}`} onClick={() => this.handleRoute("list")}>Movie List</li>
                            <li className={`admin--sidebar__items ${paymentActive}`} onClick={() => this.handleRoute("payment")}>Payment</li>
                            <li className={`admin--sidebar__items ma-4 ${logActive}`} onClick={() => this.handleRoute("logout")}>Log Out</li>
                        </ul>
                    </div>
                    <div className="admin--main">

                        { area }

                    </div>
                </div>
            </div>
         );
    }
}
 
export default Admin;