import type { User } from "../types/User"
import { posts } from "./Post"
 const users: User[] = [
    {
        id: 0,
        username: 'm0nesy',
    avatar: 'imagine an image',
    decription: 'ilya',
    posts: [posts[0]],
    friends: [],
    email: 'monesy@gmail.com',
    last_seen: 1775228842,
    },
    {
        id: 1,
        username: 's1mple',
    avatar: 'imagine an image',
    decription: 'sanya',
    posts: [posts[1]],
    friends: [],
    email: 'siple@gmail.com',
    last_seen: 1775228842,
    },
    {
        id: 2,
        username: 'kyosuke',
    avatar: 'imagine an image',
    decription: 'ya hz kak ego zovut',
    posts: [posts[1]],
    friends: [],
    email: 'suka@gmail.com',
    last_seen: 1775228842,
    }
]
users[1].friends = [users[0]]
users[2].friends = [users[0]]
users[0].friends = [users[1], users[2]]
export default users
    
