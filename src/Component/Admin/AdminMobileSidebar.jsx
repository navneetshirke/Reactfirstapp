import React from 'react';
import image from '../../assets/img/logo.png'

export default function AdminMobileSidebar(props) {
  return (
  <div id="kt_header_mobile" className="header-mobile align-items-center  header-mobile-fixed ">
   <a href="https://preview.keenthemes.com/metronic/demo13/index.html">
     <img alt="Logo" className="w-45px" src={image} />
   </a>
   <div className="d-flex align-items-center">
     <button className="btn p-0 burger-icon burger-icon-left" id="kt_aside_mobile_toggle">
       <span />
     </button>
     <button className="btn p-0 burger-icon ml-4" id="kt_header_mobile_toggle">
       <span />
     </button>
     <button className="btn btn-hover-text-primary p-0 ml-2" id="kt_header_mobile_topbar_toggle">
       <span className="svg-icon svg-icon-xl">
       </span>
     </button>
   </div>
 </div>

 );
}

