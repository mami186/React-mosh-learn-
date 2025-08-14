import './App.css'
import LoginStatus from './state-management/LoginStatus'
import { useReducer } from 'react'
import TaskReducer from './state-management/reducers/TasksReducer'
import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';
import TaskContext from './state-management/context/taskContext';
import LoginStatReducer from './state-management/reducers/LoginStatReducer';
import LoginContext from './state-management/context/loginContext';


function App() {
	const [tasks, taskDispatch] = useReducer(TaskReducer, []);
  const [user , userDispatch]=useReducer(LoginStatReducer,'')


  return (
    <LoginContext.Provider value={{user ,dispatch: userDispatch}}>

    
    <TaskContext.Provider value={{tasks,dispatch: taskDispatch}} >
    <NavBar></NavBar>
    <HomePage></HomePage>
    </TaskContext.Provider>
    </LoginContext.Provider>
  )
}

export default App
