import React from 'react'

//import "../../assets/theme/style.bundle.css"
//import "../../assets/theme/prismjs.bundle.css"
//import "../../assets/theme/login.css"


import LoginHeader from './login_header'

export default function login() {
  return (
    <div>
      <div>
        <div className="d-flex flex-column flex-root">
          <div className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white" id="kt_login">
            <div className="login-aside d-flex flex-column flex-row-auto" style={{ backgroundColor: '#F2C98A' }}>
              <div className="d-flex flex-column-auto flex-column pt-lg-30">
                <a href="/" className="text-center">
                  <img src="/metronic/theme/html/demo13/dist/assets/media/logos/logo-letter-1.png" className="max-h-70px" alt="" />
                </a>
                <h3 className="font-weight-bolder text-center font-size-h4 font-size-h1-lg" style={{ color: '#986923' }}>
                  Discover Amazing Metronic<br />
                  with great build tools
                </h3>
              </div>
              <div className="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center" style={{ backgroundImage: 'url(/metronic/theme/html/demo13/dist/assets/media/svg/illustrations/login-visual-1.svg)' }} />
            </div>
            <div className="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden mx-auto">
                <LoginHeader />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}