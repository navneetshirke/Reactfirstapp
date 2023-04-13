import React from 'react'


import "../../assets/theme/style.bundle.css"
import "../../assets/theme/prismjs.bundle.css"
import "../../assets/theme/login.css"


import LoginHeader from './login_header'

export default function login() {

  return (
    <div>
    <div className="container-fluid newlogin_header" >
    <div className="newlogin_header-header">
    <div id="login-form">
    <LoginHeader/>
    </div>
    </div>
    </div>
    </div> 
    )
}