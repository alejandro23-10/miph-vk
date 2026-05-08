import type { Message } from "../../types/Message";
import type { Chat } from "../../types/Chat";
import users from "../../data/User";
import type { User } from "../../types/User";

export default function MessageComponent(props: { message: Message, isfromuser: boolean }) {
    function userId (user: User){
        return props.message.from_user == user.id
    }
    
    return (
        <div>className={props.isfromuser ? "message from_me" : "message"}
        <h4>{users.find(userId)?.username}</h4>
        <p>{props.message.text}</p>
        </div>
    );
}