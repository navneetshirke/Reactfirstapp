import React from 'react';

function singup() {
  return (
    <div id="user_signp_form" className="animate__animated animate__backInRight animate__delay-20ms" >
      
      <div className="mt-7 text-center">
          <h3 className="font-weight-bolder text-dark font-size-h2 font-size-h2-lg">User Sign Up</h3>
      </div>

      <form className="form fv-plugins-bootstrap fv-plugins-framework" noValidate="novalidate" id="kt_login_signup_form">
      
       <div className="form-group fv-plugins-icon-container row">
          <div className='col-md-6'>
            <input className="form-control form-control-solid h-auto py-6 px-6 rounded-lg font-size-h6" type="text" placeholder="Fullname" name="fullname" autoComplete="off" />
          </div>
          <div className='col-md-6'>
            <input className="form-control form-control-solid h-auto py-6 px-6 rounded-lg font-size-h6" type="text" placeholder="Mobile Number" name="mobile_number" autoComplete="off" />
          </div>
        </div>
        <div className="form-group fv-plugins-icon-container">
          <input className="form-control form-control-solid h-auto py-6 px-6 rounded-lg font-size-h6" type="emmail" placeholder="Email" name="email" autoComplete="off" />
        </div>
        <div className="form-group fv-plugins-icon-container row">
          <div className='col-md-6'>
            <input className="form-control form-control-solid h-auto py-6 px-6 rounded-lg font-size-h6" type="text" placeholder="Password" name="password" autoComplete="off" />
          </div>
          <div className='col-md-6'>
            <input className="form-control form-control-solid h-auto py-6 px-6 rounded-lg font-size-h6" type="text" placeholder="Confirm Password" name="confirm_assword" autoComplete="off" />
          </div>
        </div>
        <div className="form-group fv-plugins-icon-container">
          <label className="checkbox mb-0">
            <input type="checkbox" name="agree" />
            <span />
            <div className="ml-2">I Agree the <a href="/">terms and conditions</a>.</div>
          </label>
          <div className="fv-plugins-message-container" /></div>
        <div className="form-group d-flex flex-wrap pb-lg-0 pb-3">
          <button type="button" id="kt_login_signup_submit" className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4">Submit</button>
          <button type="button" id="kt_login_signup_cancel" className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3">Cancel</button>
        </div>
        <div />
      </form>
    </div>
  );
}

export default singup;