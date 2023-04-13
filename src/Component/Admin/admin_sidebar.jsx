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
          <nav className="main-menu">
      <div className="aside aside-left  aside-fixed  d-flex flex-column flex-row-auto" id="kt_aside">

        <div className="brand flex-column-auto " id="kt_brand" kt-hidden-height={119}>
          <a href="/" className="brand-logo">
            <img alt="Logo" className="w-35px" src={image} />
          </a>
        </div>


        <div className="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper">
          <div id="kt_aside_menu" className="aside-menu" data-menu-vertical={1} data-menu-scroll={1} data-menu-dropdown-timeout={500} style={{ height: '491px', overflowY: "scroll" }}>
            <ul className="menu-nav text-center">
              {datas.map((data, index) =>
                <li className="" aria-haspopup="true" key={index} data-toggle="tooltip" title={data.link_name} >
                  <Link to={data.url} className="menu-link ">
                    <i className={data.icon} />
                    <span className="text-white mr-1 ml-4"> {data.link_name} </span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      </nav>

      {/*<div>
  <nav className="main-menu">
    <ul>
        { datas.map( (data, index ) => 
      <li  key={index}>
        <Link to={data.url}>
          <FontAwesomeIcon icon={faHome} />
          <span className="nav-text">
            {data.link_name}
          </span>
        </Link>
      </li>
        )}
    </ul>
  </nav>
</div>
*/}

    </>
  );
}

