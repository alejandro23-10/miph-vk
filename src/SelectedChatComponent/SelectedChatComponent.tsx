import type { Chat } from "../types/Chat"
import "./SelectedChatComponent.css"

export default function SelectedChatComponent(props: {chat: Chat | undefined }) {
    return <div className="selectedchat-look">
        {props.chat == undefined ? <p>яйца бро ты чат не выбрал брух гузлик</p> : <div>
            {props.chat.users[0].username}
        </div>
        }
    </div>
}