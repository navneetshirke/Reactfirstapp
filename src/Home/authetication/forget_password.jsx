import React from 'react';

function forget_password() {
  return (
    <div>
      <div className="login-form animate__animated animate__backInRight animate__delay-20ms pt-5" id="login-forgot">
      <div className="mt-7 text-center">
          <h3 className="font-weight-bolder text-dark font-size-h2 font-size-h2-lg">Forgotten Password ?</h3>
          <p className="text-muted font-weight-bold font-size-h4">Enter your email to reset your password</p>
        </div>

        <form className="form fv-plugins-bootstrap fv-plugins-framework" noValidate="novalidate" id="kt_login_forgot_form">
          <div className="form-group fv-plugins-icon-container">
            <input className="form-control form-control-solid h-auto py-4 px-4 rounded-lg font-size-h6" type="email" placeholder="Email" name="email" autoComplete="off" />
            <div className="fv-plugins-message-container" /></div>
          <div className="form-group d-flex flex-wrap pb-lg-0">
            <button type="button" id="kt_login_forgot_submit" className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4">Submit</button>
            <button type="button" id="kt_login_forgot_cancel" className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3">Cancel</button>
          </div>
          <div />
        </form>

      </div>
    </div>
  );
}

export default forget_password;