import { useNavigate } from "react-router"

export default function HomePage() {
    let navigate = useNavigate()
    function login() {
        localStorage.setItem("userId", "1")
        navigate("/")
    }
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={login}>Зарегаться</button>
        </div>
    )
}