import React, { Component } from 'react';
import ripple from '../img/Ripple-Logo.png';
import resetimage from '../img/resetimage.png';
import Button from '../common/button';

function ResetConfirm() {
	return (
        <section className = "reset__confirm__body">
            <nav className = "reset__confirm__navbar">
                <img src = {ripple} alt="logo"></img>
            </nav>
            <div className="reset__confirm__card">
                <img src = {resetimage} alt="resetimage"></img>
                <h1>Reset Password</h1>
                <form action="" className="reset__confirm__form">
                    <div className="reset__confirm__input">
                        <input type="password" placeholder="New Password"></input>
                        <input type="password" placeholder="Confirm Password"></input>
                    </div>
                  
                    <Button label={"Reset Password"}  giveClass="reset__confirm__button" path="/resetsuccessful" buttonType={true}></Button> 
                </form>
            </div>



        </section>

    );

}

export default ResetConfirm;