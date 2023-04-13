import React, { useState } from "react";

import 'animate.css';
import "../../assets/theme/style.bundle.css"
import "../../assets/theme/prismjs.bundle.css"
import "../../assets/theme/login.css"


import UserLogin from "./user_login";
import Hplogin from "./hp_login";
import ForgetPassword from "./forget_password"
import Singup from "./user_sing_up"
import EmailConfirmation from "./email_confirmation"

export default function LoginHeader() {
	document.body.classList.remove("header-fixed", "header-mobile-fixed", "subheader-enabled", "aside-enabled", "aside-fixed");  

	const [value, setValue] = useState("ShowUserScreen")
	return (
		<div>

			<div className='user_login' id="user_login_header">
				<div className="login-form login-signin">					
						<div className="row">
							<button type="button" className="col-md btn btn-primary font-size-h6 font-weight-bolder ml-1 pt-5 pb-5" value="User" onClick={e => setValue("ShowUserScreen")}>Subscriber Login</button>
							<button type="button" className="col-md btn btn-success font-size-h6 font-weight-bolder ml-1 pt-5 pb-5" value="Hp" onClick={e => setValue("ShowHpScreen")}>Health Partner Login</button>
					</div>
				</div>
			</div>

			{ value === "ShowUserScreen" ? <UserLogin /> : ""  }
			{ value === "ShowHpScreen" ? <Hplogin /> : ""  }
			{ value === "ShowForgotpasswordScreen" ? <ForgetPassword /> : ""  }
			{ value === "ShowSignupformScreen" ? <Singup /> : ""  }
			{ value === "ShowEmailComfirmationScreen" ? <EmailConfirmation /> : ""  }

			<span className="text-muted font-weight-bold font-size-h4">New Here?
				<a onClick={e => setValue("ShowSignupformScreen")} type='button' className="text-primary font-weight-bolder">Create an Account</a>
			</span>
			<br />
			<a onClick={e => setValue("ShowForgotpasswordScreen")} type='button' className="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5">Forgot Password?</a>
			<br />
			<a onClick={e => setValue("ShowEmailComfirmationScreen")} type='button' className="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5">Didn’t receive confirmation email?</a>

		</div>
	);
}



