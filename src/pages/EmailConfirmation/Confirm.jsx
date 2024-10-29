import React, {useContext, useEffect, useState} from "react";
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom";
import {userEmailConfirm} from "../../redux/api/userApi";
import {AuthContext} from "./../../context/AuthProvider";
// get the token 
// send to confirm 
// if accepted change the context to login then login user 
// if not redirct to main page


const Confirm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [token , setToken] = useState("")
    const authContext = useContext(AuthContext); // Access the AuthContext

    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        dispatch(userEmailConfirm(token)).then((resultAction) => {
            if (userEmailConfirm.fulfilled.match(resultAction)) {
                  authContext.login();
                  navigate("/dashboard");
            } else {
                  navigate("/")
            }
         
                  
          });
    },[])
    return (
    <div className="h-screen">
        <p>{token}</p>
    </div>)
}

export default Confirm