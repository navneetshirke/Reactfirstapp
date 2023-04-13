import { useState } from 'react';

export default function AdminLogin() {

  const [email, SetEmail] = useState("")
  const [password, setPassword] = useState("")

  const admin_form_submit = (e) => {
    e.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "admin": { email: "dev@halofit.com", password: 123456 } })
    };

    fetch('http://localhost:3000/api/v1/login', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));

    console.log(email)
    console.log(password)

  }

  return (
    <div>
       <div className="container-fluid newlogin_header" >
    <div className="newlogin_header-header">
    <div id="login-form">

                <div className="login-form login-signin animate__animated animate__backInRight animate__delay-20ms pt-5">

                  <form className="form fv-plugins-bootstrap fv-plugins-framework" noValidate="novalidate" id="kt_login_signin_form" onSubmit={admin_form_submit}>
                    <div className="pb-13 pt-lg-0 pt-5">
                      <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Admin Login</h3>
                    </div>
                    <div className="form-group fv-plugins-icon-container">
                      <label className="font-size-h6 font-weight-bolder text-dark">Email</label>

                      <input className="form-control form-control-solid h-auto py-4 px-4 rounded-lg"
                        type="text"
                        name="username"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => SetEmail(e.target.value)} />

                      <div className="fv-plugins-message-container" /></div>
                    <div className="form-group fv-plugins-icon-container">
                      <div className="d-flex justify-content-between mt-n5">
                        <label className="font-size-h6 font-weight-bolder text-dark pt-5">Password</label>
                      </div>
                      <input className="form-control form-control-solid h-auto py-4 px-4 rounded-lg"
                        type="password"
                        name="password"
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                      <div className="fv-plugins-message-container" /></div>
                    <div className="pb-lg-0 pb-5">
                      <button type="submit" id="kt_login_signin_submit" className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"  >Sign In</button>

                    </div>
                  </form>

                </div>


              </div>
            </div>
          </div>
        </div>
  )
}