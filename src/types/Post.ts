import type { Comment } from "./Comment";

type Post = {
    id: number;
    text: string;
    image: string;
    comments: Comment[]
    from_user: number;
    created_at: number;
}
export type { Post }