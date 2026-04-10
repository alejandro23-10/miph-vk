import type { Chat } from "../../types/Chat";

export default function ChatComponent(props: {chat: Chat}) {
    console.log(props.chat.messages)
    return (
        <div>
            <div>название чата: {props.chat.title}</div>
            <div>аватарка: {props.chat.avatar}</div>
            <div>айди чата: {props.chat.id}</div>
            <div>последнее сообщение: {props.chat.messages[props.chat.messages.length -1].text}</div>
            <div>други: {props.chat.users[0].username}</div>
        </div>
    )
}   