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
                <p>Enter an email address you use to sign in to</p>
                <form action="" className="reset__password__form">
                    <div className="reset__form__input">
                        <input type="email" placeholder="E-mail"></input>
                    </div>
                   <div className="reset__button"> 
                    <Button label={"Reset Password"} buttonType={true}></Button> 
                    </div>
                </form>
            </div>



        </section>

    );

}

export default ResetPassword