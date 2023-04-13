import React from 'react';
import { Link } from "react-router-dom"
import image from '../../assets/img/logo.png'
import '../../assets/theme/sidebar.css'

export default function admin_sidebar(props) {
  console.log(this)

  const datas = [
    { url: "/admin/dashboard", link_name: "Dashboard", icon: "menu-icon text-white fas fa-home icon-2x mb-5 ml-2 mt-1 mr-2 text-center"},
    { url: "/admin/wallet", link_name: "Wallet", icon: "menu-icon text-white fas fa-wallet icon-2x mb-5 ml-2 mt-1 mr-2 text-center"},
    { url: "/admin/transaction_list", link_name: "Transactions", icon: "menu-icon text-white far fa-money-bill-alt icon-2x mb-5 ml-2 mt-1 mr-2 text-center"},
    { url: "/admin/subscription_list", link_name: "subscriptions", icon: "menu-icon text-white fas fa-ticket-alt icon-2x mb-5 ml-2 mt-1 mr-2 text-center"},
    { url: "/admin/appointment_list", link_name: "Appointments", icon: "menu-icon text-white fa-regular fa-calendar-check icon-2x mb-5 ml-2 mt-1 mr-2 text-center"},
    { url: "/admin/user_list", link_name: "Users", icon: "menu-icon text-white fas fa-user-alt icon-2x mb-5 ml-2 mt-1 mr-2 text-center"},
    { url: "/admin/health_partner_list", link_name: "HealthPartners", icon: "menu-icon text-white fas fa-user-md icon-2x mb-5 ml-2 mt-1 mr-2 text-center"},
    { url: "/admin/admin_list", link_name: "Admins", icon: "menu-icon text-white fas fa-user-cog icon-2x mb-5 ml-2 mt-1 mr-2 text-center"},
    { url: "/admin/program_list", link_name: "Programs", icon: "menu-icon text-white fab fa-slack-hash icon-2x mb-5 ml-2 mt-1 mr-2 text-center"},
    { url: "/admin/region_list", link_name: "Regions", icon: "menu-icon text-white fas fa-cookie icon-2x mb-5 ml-2 mt-1 mr-2 text-center"},
    { url: "/admin/plan_list", link_name: "Plans", icon: "menu-icon text-white fas fa-asterisk icon-2x mb-5 ml-2 mt-1 mr-2 text-center"},
    { url: "/admin/city_list", link_name: "City", icon: "menu-icon text-white fas fa-window-maximize icon-2x mb-5 ml-2 mt-1 mr-2 text-center"},
  ]

  return (
    <>

    </>
  );
}

