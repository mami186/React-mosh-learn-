import React, { useReducer } from 'react'
import LoginStatReducer, { LoginContext } from './LoginStatReducer';

interface Props{
    children:React.ReactNode
}
const LoginProvider = ({children}:Props) => {
    const [user, dispatch] = useReducer(LoginStatReducer, "");

  return (
    <LoginContext value={{user, dispatch}}>
        {children}
    </LoginContext>
  )
}

export default LoginProvider