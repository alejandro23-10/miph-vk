import { useNavigate } from "react-router";
import "./Navigator.css";

export default function Navigator() {
    const navigate = useNavigate();

    return (
        <div className="navigator-container">
            <div className="navigator">
                <button onClick={() => navigate("Chats")}>
                    Ленточка тикитока
                </button>
            </div>

            <div className="navigator">
                <button onClick={() => navigate("ChatId")}>
                    Чатик с фсб
                </button>
            </div>

            <div className="navigator">
                <button onClick={() => navigate("Profile")}>
                    Профиль
                </button>
            </div>
        </div>
    );
}
