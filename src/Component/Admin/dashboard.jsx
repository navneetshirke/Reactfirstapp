import React from 'react';
import UpperHeader from './UpperHeader';
import LowerHeader from './LowerHeader';
import AdminMobileSidebar from './AdminMobileSidebar';

function dashboard(props) {
  document.body.className = (["header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed" ])

    return (
        <>
        {/*  <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
            
            <UpperHeader/>
            
            <div className="content  d-flex flex-column flex-column-fluid" id="kt_content">

              <LowerHeader/>

            <div className="d-flex flex-column-fluid">
              <div className=" container ">
              <table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Status</th>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Status</th>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Nick</td>
            <td>Stone</td>
            <td>
                <span class="label label-inline label-light-primary font-weight-bold">
                    Pending
                </span>
            </td>
            <th scope="row">1</th>
            <td>Nick</td>
            <td>Stone</td>
            <td>
                <span class="label label-inline label-light-primary font-weight-bold">
                    Pending
                </span>
            </td>
            <th scope="row">1</th>
            <td>Nick</td>
            <td>Stone</td>
            <td>
                <span class="label label-inline label-light-primary font-weight-bold">
                    Pending
                </span>
            </td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Ana</td>
            <td>Jacobs</td>
            <td>
                <span class="label label-inline label-light-success font-weight-bold">
                    Approved
                </span>
            </td><th scope="row">1</th>
            <td>Nick</td>
            <td>Stone</td>
            <td>
                <span class="label label-inline label-light-primary font-weight-bold">
                    Pending
                </span>
            </td><th scope="row">1</th>
            <td>Nick</td>
            <td>Stone</td>
            <td>
                <span class="label label-inline label-light-primary font-weight-bold">
                    Pending
                </span>
            </td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>Pettis</td>
            <td>
                <span class="label label-inline label-light-danger font-weight-bold">
                    New
                </span>
            </td><th scope="row">1</th>
            <td>Nick</td>
            <td>Stone</td>
            <td>
                <span class="label label-inline label-light-primary font-weight-bold">
                    Pending
                </span>
            </td><th scope="row">1</th>
            <td>Nick</td>
            <td>Stone</td>
            <td>
                <span class="label label-inline label-light-primary font-weight-bold">
                    Pending
                </span>
            </td>
        </tr>
    </tbody>
</table>
              </div>
            </div>

            </div>
          </div>*/}
        </>
    );
}

export default dashboard;