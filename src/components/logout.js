import React from 'react'
import {logout , selectUser} from "../Features/userSlice"
import {useDispatch , useSelector} from 'react-redux'

export const Logout = () => {
    const user = useSelector(selectUser); 

    const dispatch = useDispatch();
    const handleLogout =(e) => {
        e.preventDefault();
        dispatch(logout());
    }
    return (
        <div>
            welcome 
            <span className="user_name">{user.name}</span>
            <button className="logout_button" onClick={(e) => handleLogout(e)}>Logoout</button>
        </div>
    )
}
