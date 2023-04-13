import { Routes, Route } from "react-router-dom"

import Sidebar from "./Component/Admin/admin_sidebar"
import Wallet from "./Component/Admin/wallet"
import User_list from "./Component/Admin/user_list"
import Transaction_list from "./Component/Admin/transaction_list"
import Subscription_list from "./Component/Admin/subscription_list"
import Region_list from "./Component/Admin/region_list"
import Program_list from "./Component/Admin/program_list"
import Plan_list from "./Component/Admin/plan_list"
import Health_partner_list from "./Component/Admin/health_partner_list"
import Dashboard from "./Component/Admin/dashboard"
import City_list from "./Component/Admin/city_list"
import Appointment_list from "./Component/Admin/appointment_list"
import Admin_list from "./Component/Admin/admin_list"

function AdminRoutes(props) {
  return (
    
    <div className="d-flex flex-column flex-root">
    <div className="d-flex flex-row flex-column-fluid page">

        <Sidebar />
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/wallet" element={<Wallet />} />
          <Route path="/admin/transaction_list" element={<Transaction_list />} />
          <Route path="/admin/subscription_list" element={<Subscription_list />} />
          <Route path="/admin/appointment_list" element={<Appointment_list />} />
          <Route path="/admin/user_list" element={<User_list />} />
          <Route path="/admin/health_partner_list" element={<Health_partner_list />} />
          <Route path="/admin/admin_list" element={<Admin_list />} />
          <Route path="/admin/program_list" element={<Program_list />} />
          <Route path="/admin/region_list" element={<Region_list />} />
          <Route path="/admin/plan_list" element={<Plan_list />} />
          <Route path="/admin/city_list" element={<City_list />} />
        </Routes>
        
      </div>
    </div>
  );
}

export default AdminRoutes;