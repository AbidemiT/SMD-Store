import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <Fragment>
            <div className="auth-container m-2 box-shadow">
                <div className="img-container">
                </div>
                <div className="form-container bg-primary p-2">
                    <div className="form-content">
                        <h4 className="m-header">New Member</h4>
                    </div>
                    <form>
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Enter Fullname"/>
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Email Address"/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="cpassword" placeholder="Confirm Password"/>
                        </div>
                        <div className="form-group">
                           <input type="submit" className="btn btn-dark text-light" value="Sign Up"/>
                        </div>

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
