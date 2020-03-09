import {REGISTER_SUCCESS, LOGIN_SUCCESS, REGISTER_FAIL, LOGIN_FAIL, CLEAR_ERRORS, AUTH_ERROR, USER_LOADED} from "../types";

export default (state, action) => {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
                errors: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: null
            }
    
        default:
            return state;
    }
}