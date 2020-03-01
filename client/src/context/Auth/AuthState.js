import React, {useReducer} from "react";
import AuthReducer from "../Auth/authReducer";
import AuthContext from "../Auth/authContext";
import axios from "axios";
import {REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL,CLEAR_ERRORS} from "../types";

const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem("token"),
        isAuthenticated: false,
        user: null,
        errors: null,
        loading: true
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Actions

    // Login
    const login = async formData =>  {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const url = "/api/auth";

        try {
            const res = await axios.post(url, formData, config);
            dispatch({type: LOGIN_SUCCESS, payload: res.data});
            
        } catch (error) {
            dispatch({type: LOGIN_FAIL, payload: error.response.data.err})
        }
    }

    // Register
    const register = async formData => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const url = "/api/user";
        
        try {
            const res = await axios.post(url, formData, config);
            dispatch({type: REGISTER_SUCCESS, payload: res.data});
            
        } catch (error) {
            dispatch({type: REGISTER_FAIL, payload: error.response.data.err})
        }
    }

    // Clear Errors
    const clearErrors = () => {
        dispatch({type: CLEAR_ERRORS});
    }


    return (
        <AuthContext.Provider value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            errors: state.errors,
            register,
            login,
            clearErrors
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;