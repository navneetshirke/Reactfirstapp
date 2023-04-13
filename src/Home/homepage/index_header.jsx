import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {

	return (
		<div>

<header id="header" className="fixed-top ">
<div className="container d-flex align-items-center">
<h1 className="logo me-auto"><a href="index.html">Testing</a></h1>
<nav id="navbar" className="navbar">
<ul>
<li><Link to="/" className="nav-link scrollto active">Home</Link></li>
<li><Link to="/visiter/program" className="nav-link scrollto">Program</Link></li>
<li><Link to="/visiter/faq" className="nav-link scrollto">Faq</Link></li>
<li><a href="/" className="nav-link scrollto">Join Us</a></li>
<li><Link to="/login" className="getstarted scrollto">Login</Link></li>
</ul>
<i className="bi bi-list mobile-nav-toggle" />
</nav>
</div>
</header>
		</div>
	)
}