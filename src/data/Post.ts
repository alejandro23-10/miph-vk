import type { Post } from "../types/Post";
import comments from "./Comment";

export const posts: Post[] = [
    {id: 0,
    text: 'shalom',
    image: 'image',
    comments: [comments[0]],
    from_user: 1,
    created_at: 1775228842,
    },
    {id: 1,
    text: 'hello',
    image: 'image',
    comments: [comments[1]],
    from_user: 2,
    created_at: 1775228842,
    }
]