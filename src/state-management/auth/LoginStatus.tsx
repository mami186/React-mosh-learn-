import { useContext } from "react";
import { LoginContext } from "./LoginStatReducer";

const LoginStatus = () => {

  const {user, dispatch}=useContext(LoginContext)

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
