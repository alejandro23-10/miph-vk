import type { Chat } from "../types/Chat";
import users from "./User";
import { messages } from "./Message";

export const chats: Chat[] = [
    {
        id: 0,
    users: [users[0], users[1]],
    messages: [messages[0], messages[1]],
    title: 'shalom',
    avatar: 'imagine an image',
    },
    {
        id: 1,
    users: [users[1], users[2]],
    messages: [messages[0], messages[1]],
    title: 'hello',
    avatar: 'imagine an image',
    },
]