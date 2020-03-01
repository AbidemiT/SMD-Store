import React, {Fragment, useContext, useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import AuthContext from "../../context/Auth/authContext";
import AlertContext from "../../context/Alert/alertContext";

const SignUp = (props) => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);
    const {setAlert, alerts} = alertContext;
    const {register, errors, isAuthenticated} = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push("/addproduct");
        }

        if (errors === "User Already Exist") {
            setAlert("Email Already in Use", "danger");
            setUser({
                name: "",
                email: "",
                password: "",
                cpassword: ""
            });
        }  
        //eslint-disable-next-line
    }, [isAuthenticated, props.history, errors])

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    })

    const {name, email, password, cpassword} = user;

    const onSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "" || password === "" || cpassword === "") {
            setAlert("Fields are required", "danger");
        } else if (password !== cpassword) {
            setAlert("Passwords doesn't match", "danger");
            setUser({
                name: "",
                email: "",
                password: "",
                cpassword: ""
            });
        } else {
            register({
                name,
                email,
                password
            });
        } 
    }

    const onChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    let errorStatus = false;
    if (alerts.length > 0) {
        alerts.length > 0 && alerts.map(alert => {
            if(alert.msg === "Fields are required") {
                errorStatus = "danger";
            }
        })
    } 

    return (
        <Fragment>
            <div className="auth-container m-2 box-shadow">
                <div className="img-container">
                </div>
                <div className="form-container bg-primary p-2">
                    <div className="form-content">
                        <h4 className="m-header">New Member</h4>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Enter Fullname" className={"border-" + (errorStatus) } value={name} onChange={onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Email Address" className={"border-" + (errorStatus) } value={email} onChange={onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="Password" className={"border-" + (errorStatus) } value={password} onChange={onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="cpassword" placeholder="Confirm Password" className={"border-" + (errorStatus) } value={cpassword} onChange={onChange}/>
                        </div>
                        <div className="form-group">
                           <input type="submit" className="btn btn-dark text-light" value="Sign Up"/>
                        </div>

                        {alerts.length > 0 && alerts.map(alert => (
                            <div key={alert.id} className="form-group">
                                <h6 className={`text-${alert.type}`}><i className="fa fa-info-circle" aria-hidden="true"></i> {alert.msg}</h6>
                            </div>
                        ))}

                        <div className="info">
                            <h6>Already a member ? <Link to="/login">Sign In</Link></h6>
                        </div>
                    </form>  
                </div>
            </div>
        </Fragment>
    )
}

export default SignUp;
