import { use } from "react"

export interface LOGIN{
    type:'LOGIN' 
    username:string
}

interface LOGOUT{
    type: 'LOGOUT'
}
export type LoginAction = LOGIN | LOGOUT

const LoginStatReducer=(state:string ,action:LoginAction):string=>{
if (action.type==='LOGIN') return action.username
if (action.type==='LOGOUT') return ''
return state
}
export default LoginStatReducer