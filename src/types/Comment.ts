type Comment = {
    from_user: number;
    text: string;
    replies: Comment[];
    image: string;
    created_at: number;
    comment_origin: number;
    post: number;
}
export type { Comment }