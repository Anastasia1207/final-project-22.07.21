import Breadcrumbs from '../Components/Breadcrumbs';
import DataListInput from "react-datalist-input";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactHTMLDatalist from "react-html-datalist";
import { NavLink } from 'react-router-dom';



const breadcrumbPaths = [
    { link: '/', title: 'Home' },
    { title: 'Login' },
 

];

// const Country = props => {
//     const [detail, setDetail] = useState({ country_id: "" });
  
//     const handleChange = e => {
//       setDetail({ ...detail, [e.target.name]: e.target.value });
//     };
  
//     return (
//       <div className="Country">
  
//         <p>
//           <b>Country:</b> {detail.country_id || "(none)"}
//         </p>

  
//         <ReactHTMLDatalist
//           name={"food_id"}
//           onChange={handleChange}
//           classNames={"classone classtwo"}
//           options={[
//             { text: "Latvia", value: "1" },
//             { text: "USA", value: "2" },
//             { text: "Italy", value: "3" },
//             { text: "Morocco", value: "4" }
//           ]}
//         />
//       </div>
//     );
//   };
function Register() {
    return (
        <div className="container">
            <div className="row">
                <div ClassName="col">
                <Breadcrumbs paths={breadcrumbPaths} />
                </div>
            </div>


            <div className="row">
                <div className="col">
                    <h3>Register</h3>
                </div>
            </div>


            <div className="row">
                <div className="col-md-2 form-group" style={{marginBottom: '10px'}}>
                    <input className="form-control form-control-sm" placeholder="Username&#42;"/>


                </div>
            </div>

            <div className="row">
            <div className="col-md-2 form-group" style={{marginBottom: '10px'}}>
                    <input className="form-control form-control-sm" placeholder="Password&#42;"/>



                </div>
            </div>

            <div className="row">
           
                    <div className="col-md-2 form-group" style={{marginBottom: '10px'}}>
                    <input className="form-control form-control-sm" placeholder="Retype password&#42;"/>
                </div>
            </div>

            <div className="row">
            <div className="col-md-2 form-group required" style={{marginBottom: '10px'}}>
                    <input className="form-control form-control-sm" placeholder="First name&#42;"/>


                </div>
            </div>

            <div className="row">
            <div className="col-md-2 form-group" style={{marginBottom: '10px'}}>
                    <input className="form-control form-control-sm"  placeholder="Last name"/>
                </div>
            </div>

             <div className="row">
                <div className="col-md-2 form-group" style={{marginBottom: '10px'}}> 
<select className="form-control form-control-sm " placeholder="Country">
    
<option value="" selected="true" disabled="disabled" >Choose country&#42;</option>
  <option >USA</option>
  <option>Latvia</option>
  <option>Italy</option>
  <option>Spain</option>
  <option>Australia</option>
</select>

              </div>
            </div> 

            <div className="row">
                <div className="col">
                  
                    <div className="form-check" style={{marginBottom: '10px'}}>
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
  <p>Agree with <NavLink to="/404">Terms &amp; Privacy</NavLink>.</p>
  </label>
</div>

                </div>
            </div>

            <div className="row">
                <div className="col" style={{marginBottom: '310px'}}>
                <button type="button" className="btn btn-primary">Register</button>


                </div>
            </div>






        </div>
    )
}

export default Register;