import { useLocation, useNavigate } from "react-router";

export default function useCheckRoute(){
    const location = useLocation();
    let isAuth = false
    if(localStorage.getItem('userId') != null){
        isAuth = true
    }
    return {isAuth, location}
}