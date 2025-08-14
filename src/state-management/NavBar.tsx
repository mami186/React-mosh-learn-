import { useContext } from 'react';
import LoginStatus from './LoginStatus';
import TaskContext from './context/taskContext';
import loginContext from './context/loginContext';

const NavBar = () => {
  const {tasks}=useContext(TaskContext)
  const {user}= useContext(loginContext)
  return (
    <nav className="navbar d-flex justify-content-between">
      <div>User:{user}</div>
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
