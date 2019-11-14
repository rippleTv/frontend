import React, { Component } from 'react';
import ripple from '../img/Ripple-Logo.png';
import resetimage from '../img/resetimage.png';
import Button from '../common/button';

function ResetSuccessful() {
	return (
        <section className = "reset__successful__body">
            <nav className = "reset__successful__navbar">
                <img src = {ripple} alt="logo"></img>
            </nav>
            <div className="reset__successful__card">
                <img src = {resetimage} alt="resetimage"></img>
                <h1>Successful Password Reset</h1>
                <p>You can now log in to your account</p>
                   <div className="reset__successful__button"> 
                    <Button label={"Log In"}  path="/signin" buttonType={true}></Button> 
                    </div>
            </div>



        </section>

    );

}

export default ResetSuccessful;