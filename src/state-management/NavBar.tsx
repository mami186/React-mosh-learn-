import { useContext } from 'react';
import {LoginStatus} from './auth/index';
import { TaskContext } from './tasks/TasksReducer';
import { LoginContext } from './auth/LoginStatReducer';

const NavBar = () => {
  const {tasks}=useContext(TaskContext)
  const {user}= useContext(LoginContext)

  return (
    <nav className="navbar d-flex justify-content-between">
      <div>User:{user}</div>
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />  
    </nav>
  );
};

export default NavBar;
