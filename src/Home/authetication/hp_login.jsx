import React from 'react';

export default function Hplogin(props) {
  return (

    <div id="hp_form">
      
    <div className="animate__animated animate__backInRight">

    <div className="mt-7 text-center">
    <h3 className="font-weight-bolder text-dark font-size-h2 font-size-h2-lg pt-5">Health Partner Login</h3>
    </div>

    <form className="form fv-plugins-bootstrap fv-plugins-framework" noValidate="novalidate" id="kt_login_signin_form">

    <div className="form-group fv-plugins-icon-container">
    <label className="font-size-h6 font-weight-bolder text-dark">Email</label>
    <input className="form-control form-control-solid h-auto py-4 px-4 rounded-lg" type="text" name="username" autoComplete="off" />
    <div className="fv-plugins-message-container" /></div>

    <div className="form-group fv-plugins-icon-container">
    <div className="d-flex justify-content-between mt-n5">
    <label className="font-size-h6 font-weight-bolder text-dark pt-5">Password</label>
    </div>
    <input className="form-control form-control-solid h-auto py-4 px-4 rounded-lg" type="password" name="password" autoComplete="off" />
    <div className="fv-plugins-message-container" /></div>

    <div className="pb-lg-0 pb-5">
    <button type="button" id="kt_login_signin_submit" className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3">Sign In</button>
    </div>
    <div />
    </form>
    </div>
    </div>
    );
}

