import MessageComponent from "../components/ChatComponent/MessageComponent"
import type { Chat } from "../types/Chat"
import type { Message } from "../types/Message"
import "./SelectedChatComponent.css"

export default function SelectedChatComponent(props: {chat: Chat | undefined }) {
    function seemessage(message: Message){
        return(
            <div>
                <MessageComponent message={message} isfromuser={message.from_user == 1} />
            </div>
        )
    }


    
    return <div className="selectedchat-look">
        {props.chat == undefined ? <p className="no-chat-text">яйца бро ты чат не выбрал брух гузлик</p> : <div>{props.chat.users[0].username} 
            {props.chat.messages.map(seemessage)}
                </div>} 
            <div>    
        </div>

    </div>
}