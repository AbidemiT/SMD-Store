import React, { Fragment } from 'react';
import {Link} from "react-router-dom";

const SignIn = () => {
    return (
        <Fragment>
            <div className="auth-container m-2 box-shadow">
                <div className="img-container">
                </div>
                <div className="form-container bg-primary p-2">
                    <div className="form-content">
                        <h3 className="m-header text-primary">Already a member</h3>
                    </div>
                    <form>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Email Address"/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password"placeholder="Password"/>
                        </div>
                        <div className="form-group">
                           <input type="submit" className="btn btn-dark text-light" value="Login" />
                        </div>

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
