import type { Post } from "./Post";

type User = {
    id: number;
    username: string;
    avatar: string;
    decription: string;
    posts: Post[];
    friends: User[];
    email: string;
    last_seen: number
}




export type { User }