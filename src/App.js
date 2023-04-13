import { Routes, Route, redirect } from "react-router-dom"

import Index from "./Home/index"
import Program from "./Home/homepage/program"
import Faq from "./Home/homepage/faq"

import AdminLogin from "./Home/authetication/admin_login"
import Login from "./Home/authetication/login"

import AdminRoutes from "./AdminRoutes"
//import UserRoutes from "./UserRoutes"
//import HpRoutes from "./HpRoutes"


function App() {
	
	const adminlogin = true
	
	return (
		<>
		<Routes>
		<Route path="/" element={<Index />} />
		<Route path="/visiter/program" element={<Program />} />
		<Route path="/visiter/faq" element={<Faq />} />
		<Route path="/admin/login" element={<AdminLogin />} />
		<Route path="/login" element={<Login />} />
		</Routes>

		{ adminlogin &&  <AdminRoutes/> }

		</>
		);
	}

	export default App;
