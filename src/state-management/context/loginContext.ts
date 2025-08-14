import type { Dispatch } from "react"
import type { LOGIN, LoginAction } from "../reducers/LoginStatReducer"
import React from "react"

interface LoginContextType{
    user: string
    dispatch:Dispatch<LoginAction>
}

const loginContext =React.createContext<LoginContextType>({} as LoginContextType)

export default loginContext
