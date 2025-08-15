import useLoginStoere from "./store";

const LoginStatus = () => {

  const {LogIn, LogOut,user}=useLoginStoere()
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => LogOut()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => LogIn('mosh.hamedani')} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
