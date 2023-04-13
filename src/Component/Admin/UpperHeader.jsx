import React from 'react';

function UpperHeader(props) {
    return (
        <div id="kt_header" className="header  header-fixed ">
            <div className=" container-fluid  d-flex align-items-stretch justify-content-between">
                <div className="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
                    <div id="kt_header_menu" className="header-menu header-menu-mobile  header-menu-layout-default ">
                        <ul className="menu-nav ">
                        </ul>
                    </div>
                </div>
                <div className="topbar">
                    <div className="topbar-item">
                        <div className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2" id="kt_quick_user_toggle">
                            <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">Hi,</span>
                            <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">Sean</span>
                            <span className="symbol symbol-35 symbol-light-success">
                                <span className="symbol-label font-size-h5 font-weight-bold">S</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpperHeader;