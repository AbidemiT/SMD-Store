import React, {useReducer} from "react";
import AlertContext from "../Alert/alertContext";
import AlertReducer from "../Alert/alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";
import uuid from "uuid";

const AlertState = props => {
    const initialState = [];

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // Actions
    const setAlert = (msg, type, timeout=5000) => {
        const id = uuid.v4();
        dispatch({type: SET_ALERT, payload: {
            msg,type,id
        }})

        setTimeout(() => {
            dispatch({type: REMOVE_ALERT, payload: id})
        }, timeout);
    }

    return (
        <AlertContext.Provider value={{
            alerts: state,
            setAlert
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;