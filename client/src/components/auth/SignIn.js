import React, { Fragment, useContext, useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import AuthContext from "../../context/Auth/authContext";
import AlertContext from "../../context/Alert/alertContext";

const SignIn = (props) => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);
    const {setAlert, alerts} = alertContext;
    const {login, errors, isAuthenticated} = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push("/addproduct");
        } 
        if (errors === "Invalid Credentials") {
            setAlert("Email or Password Not Correct", "danger");
            setUser({
                email: "",
                password: ""
            })
        }
        //eslint-disable-next-line
    }, [isAuthenticated, props.history, errors]);

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const {email, password} = user;

    const onSubmit = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setAlert("Fields are required", "danger");
        } else {
            login({
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
                        <h3 className="m-header text-primary">Already a member</h3>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input type="email" name="email" className={"border-" + (errorStatus) } value={email} onChange={onChange} placeholder="Email Address"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className={"border-" + (errorStatus)} name="password" value={password} onChange={onChange} placeholder="Password"/>
                        </div>
                        <div className="form-group">
                           <input type="submit" className="btn btn-dark text-light" value="Login" />
                        </div>
                        {alerts.length > 0 && alerts.map(alert => (
                            <div key={alert.id} className="form-group">
                                <h6 className={`text-${alert.type}`}><i className="fa fa-info-circle" aria-hidden="true"></i> {alert.msg}</h6>
                            </div>
                        ))}

                        <div className="info">
                            <h6>Not a member ? <Link to="/register">SignUp</Link></h6>
                        </div>
                    </form>  
                </div>
            </div>
        </Fragment>
    )
}

export default SignIn;
