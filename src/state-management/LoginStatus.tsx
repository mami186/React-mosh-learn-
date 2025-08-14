import { useContext, useReducer, useState } from "react";
import LoginStatReducer from "./reducers/LoginStatReducer";
import loginContext from "./context/loginContext";

const LoginStatus = () => {

  const {user, dispatch}=useContext(loginContext)

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({type:'LOGOUT'})} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({username:'mosh.hamedani' ,type:'LOGIN'})} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
