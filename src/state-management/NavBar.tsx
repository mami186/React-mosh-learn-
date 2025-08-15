import useCounterStore from './counter/Store';
import useLoginStoere from './auth/store';
import LoginStatus from './auth/LoginStatus';

const NavBar = () => {
const {user}=useLoginStoere()
  const counter=useCounterStore(s=>s.counter)
  console.log('something')
  return (
    <nav className="navbar d-flex justify-content-between">
      <div>User:{user}</div>
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />  
    </nav>
  );
};

export default NavBar;
