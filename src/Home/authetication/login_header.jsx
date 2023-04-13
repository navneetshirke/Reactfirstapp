import React, { useState } from "react";

import 'animate.css';

import UserLogin from "./user_login";
import Hplogin from "./hp_login";
import ForgetPassword from "./forget_password"
import Singup from "./user_sing_up"
import EmailConfirmation from "./email_confirmation"

export default function LoginHeader() {
	document.body.classList.add("overflow-hidden");  

	const [value, setValue] = useState("ShowUserScreen")
	return (
		
		<>
		<div className='user_login' id="user_login_header">


		<div className="row mb-5">
		<div className="col-sm-6"><button type="button" className="btn-block btn btn-primary font-weight-bolder font-size-h6 px-12 rounded-login" value="User" onClick={e => setValue("ShowUserScreen")}>Subscriber Login</button></div>
		<div className="col-sm-6"><button type="button" className="btn-block btn btn-success font-weight-bolder font-size-h6 px-12 rounded-login" value="Hp" onClick={e => setValue("ShowHpScreen")}>Health Partner Login</button></div>
		</div>


		<div className="container bg-white rounded-login">

		{ value === "ShowUserScreen" ? <UserLogin /> : ""  }
		{ value === "ShowHpScreen" ? <Hplogin /> : ""  }
		{ value === "ShowForgotpasswordScreen" ? <ForgetPassword /> : ""  }
		{ value === "ShowSignupformScreen" ? <Singup /> : ""  }
		{ value === "ShowEmailComfirmationScreen" ? <EmailConfirmation /> : ""  }


		<div className="text-center">
		<a onClick={e => setValue("ShowSignupformScreen")} type='button' className="text-primary text-center font-weight-bolder font-size-h6">Create an Account</a>
		<br/>
		<a onClick={e => setValue("ShowForgotpasswordScreen")} type='button' className="text-primary font-weight-bolder font-size-h6 text-hover-primary pt-5">Forgot Password?</a>
		<br/>
		<a onClick={e => setValue("ShowEmailComfirmationScreen")} type='button' className="text-primary font-weight-bolder font-size-h6 text-hover-primary pt-5 mb-5">Didn’t receive confirmation email?</a>
		</div>
		</div>

		</div>
		</>

		);
}



