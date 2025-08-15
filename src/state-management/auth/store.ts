import { create } from "zustand"

interface LoginStore{
    user:string,
    LogIn:(username:string)=>void,
    LogOut:()=> void
}

const useLoginStoere = create<LoginStore>( set=>({
    user:'',
    LogIn:username=>set(()=>({user:username })),
    LogOut:()=>set(()=>({user:''}))
}))
export default useLoginStoere