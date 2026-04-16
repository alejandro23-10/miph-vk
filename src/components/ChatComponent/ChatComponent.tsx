import type { Chat } from "../../types/Chat";

export default function ChatComponent(props: { chat: Chat }) {
    const lastMessage = props.chat.messages[props.chat.messages.length - 1];

    return (
        <div className="chat-card">
            <div className="chat-header">
                <div className="chat-avatar">
                    <img src={props.chat.avatar} alt="avatar" />
                </div>
                <div className="chat-title">{props.chat.title}</div>
            </div>

            <div className="chat-body">
                <div className="chat-last-message">
                    {lastMessage?.text}
                </div>
                <div className="chat-user">
                    {props.chat.users[0]?.username}
                </div>
            </div>
        </div>
    );
}
