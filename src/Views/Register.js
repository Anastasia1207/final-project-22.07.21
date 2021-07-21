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
const Password = props => {
    const [detail, setDetail] = useState({ password_id: ""});
    return (
        <div className="col-md-2 form-group" style={{marginBottom: '10px'}}>
        <input className="form-control form-control-sm" placeholder="Username&#42;"  required/>


    </div>

    );

};

// let Passwords = '';
// if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
//     if (input["password"] != input["confirm_password"]) {
//       isValid = false;
//       errors["password"] = "Passwords don't match.";
//     }
// }

// const registrationForm = document.getElementById('register-form')
// const submitButton = registrationForm.elements['submit']
// const passwordInput =registrationForm.elements['password']
// const repeatPasswordInput = registrationForm.elements['passwordRepeat']

// registrationForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     if (passwordInput.value !== repeatPasswordInput.value) {
//         alert('Passwords does not match')
//         return
//     }

//     alert('Successfully submitted')
// })

// registrationForm.elements['TandC'].addEventListener('change', (event) => {
//     if (event.target.checked) {
//         submitButton.disabled = false
//     } else {
//         submitButton.disabled = true
//     }
// })
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

// ???????????
function Register() {

//     this.state = {
//       input: {},
//       errors: {}
//     };
     
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
     
//   handleChange(event) {
//     let input = this.state.input;
//     input[event.target.name] = event.target.value;
  
//     this.setState({
//       input
//     });
//   }
     
//   handleSubmit(event) {
//     event.preventDefault();
  
//     if(this.validate()){
//         console.log(this.state);
  
//         let input = {};
//         input["name"] = "";
//         input["email"] = "";
//         input["password"] = "";
//         input["confirm_password"] = "";
//         this.setState({input:input});
  
//         alert('Demo Form is submited');
//     }
//   }
  
//   validate(){
//       let input = this.state.input;
//       let errors = {};
//       let isValid = true;
  
//       if (!input["name"]) {
//         isValid = false;
//         errors["name"] = "Please enter your name.";
//       }
  
//       if (!input["email"]) {
//         isValid = false;
//         errors["email"] = "Please enter your email Address.";
//       }
  
//       if (typeof input["email"] !== "undefined") {
          
//         var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//         if (!pattern.test(input["email"])) {
//           isValid = false;
//           errors["email"] = "Please enter valid email address.";
//         }
//       }
  
//       if (!input["password"]) {
//         isValid = false;
//         errors["password"] = "Please enter your password.";
//       }
  
//       if (!input["confirm_password"]) {
//         isValid = false;
//         errors["confirm_password"] = "Please enter your confirm password.";
//       }
  
//       if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
//         if (input["password"] != input["confirm_password"]) {
//           isValid = false;
//           errors["password"] = "Passwords don't match.";
//         }
//       } 
  
//       this.setState({
//         errors: errors
//       });
  
//       return isValid;
//   }
     
//   render() {

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

            <form id="register-form">
            <div className="row">
                <div className="col-md-2 form-group required" style={{marginBottom: '10px'}}>
                    <input className="form-control form-control-sm" placeholder="Username&#42;"  required/>


                </div>
            </div>

            <div className="row">
            <div className="col-md-2 form-group required" style={{marginBottom: '10px'}}>
                    <input type="password" id="password" className="form-control form-control-sm" minlength="8" placeholder="Password&#42;" required/>



                </div>
            </div>

            <div className="row">
           
                    <div className="col-md-2 form-group required" style={{marginBottom: '10px'}}>
                    <input  type="confirm_password" name="confirm_password"  minlength="8" className="form-control form-control-sm" placeholder="password&#42;"  name="confirm_password" required/>
                </div>
            </div>

            <div className="row">
            <div className="col-md-2 form-group required" style={{marginBottom: '10px'}}>
                    <input className="form-control form-control-sm" placeholder="First name&#42;" required/>


                </div>
            </div>

            <div className="row">
            <div className="col-md-2 form-group" style={{marginBottom: '10px'}}>
                    <input className="form-control form-control-sm"  placeholder="Last name"/>
                </div>
            </div>

             <div className="row">
                <div className="col-md-2 form-group required" style={{marginBottom: '10px'}}> 
<select className="form-control form-control-sm " placeholder="Country" required>
    
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
                  
                    <div className="form-check"  required style={{marginBottom: '10px'}}>
  <input className="form-check-input required" id="TandC" name="TandC" type="checkbox" value="" id="flexCheckDefault" required/>
  <label className="form-check-label" for="TandC">
  <p>Agree with <NavLink to="/404">Terms &amp; Privacy</NavLink>.</p>
  </label>
</div>

                </div>
            </div>

            <div className="row">
                <div className="col required" style={{marginBottom: '310px'}}>
                <button type="submit" name="submit" style={{backgroundColor: '#16A085'}} className="btn btn required">Register</button>


                </div>
            </div>





            </form>
        </div>
    );
}
// }

export default Register;