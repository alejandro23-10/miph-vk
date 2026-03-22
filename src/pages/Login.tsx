import { useNavigate } from "react-router";

export default function Login(){
    let navigate = useNavigate()
    function login() {
        localStorage.setItem("userId", "1")
        navigate("/")
    }
    
    
    
    return (
        <div>
            <h1>Login</h1>
            <button onClick={login}>Зарегаться</button>
        </div>
    )
}