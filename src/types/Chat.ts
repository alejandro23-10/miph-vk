import type { Message } from "./Message";
import type { User } from "./User";

type Chat = {
    id: number;
    users: User[];
    messages: Message[];
    title: string;
    avatar: string;
}
export type { Chat }