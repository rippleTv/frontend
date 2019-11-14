import React from 'react';
import ripple from '../img/Ripple-Logo.png';
import resetimage from '../img/resetimage.png';
import Button from '../common/button';

function ResetPassword() {
	return (
        <section className = "reset__body">
            <nav className = "reset__navbar">
                <img src = {ripple} alt="logo"></img>
            </nav>
            <div className="reset__card">
                <img src = {resetimage} alt="resetimage"></img>
                <h1>Reset Password</h1>
                <p>Enter your email address </p>
                <form action="" className="reset__password__form">
                    <div className="reset__form__input">
                        <input type="email" placeholder="E-mail"></input>
                    </div>
                   
                    <Button label={"Reset Password"} giveClass="reset__button" path="/resetconfirm" buttonType={true}></Button> 
                    
                </form>
            </div>



        </section>

    );

}

export default ResetPassword