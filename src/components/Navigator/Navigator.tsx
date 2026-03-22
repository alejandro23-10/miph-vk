import { useLocation, useNavigate } from "react-router";
import "./Navigator.css";
import { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";

export default function Navigator() {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;
    useEffect(() => {
        if (location.pathname=="/Auth"){
        console.log('AuthLayout')
}
        if (location.pathname=="/"){
        console.log('MainLayout')
}
        if (location.pathname=="/Chats"){
        console.log('ChatsLayout')
}   
        if (location.pathname.includes("/Chats/")){
        console.log('ChatsIdLayout')
}  
console.log(location.pathname)
    }, [location]

)
    
    return (
        <div className="navigator-container">
            <div className="navigator">
                <button
                    className={isActive("/") ? "active" : ""}
                    onClick={() => navigate("/")}
                >
                    Ленточка тикитока
                </button>
            </div>

            <div className="navigator">
                <button
                    className={location.pathname.startsWith("/Chats") ? "active" : ""}
                    onClick={() => navigate("/Chats")}
                >
                    Чатики со спецслужбами
                </button>
            </div>

            <div className="navigator">
                <button
                    className={isActive("/auth") ? "active" : ""}
                    onClick={() => navigate("/auth")}
                >
                    аутистофикация
                </button>
            </div>
        </div>
    );
}
