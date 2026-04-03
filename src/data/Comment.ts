import type { Comment } from "../types/Comment";

    const comments: Comment[] = [
    {id: 0,
    from_user: 1,
    text: 'shalom',
    replies: [],
    image: 'image',
    created_at: 1775228842,
    comment_origin: null,
    post: 1,
    },
    {id: 1,
    from_user: 2,
    text: 'hello',
    replies: [],
    image: 'image',
    created_at: 1775228842,
    comment_origin: 0,
    post: 1,
    },
]
comments[0].replies = [comments[1]]
export default comments