type Comment = {
    id: number;
    from_user: number;
    text: string;
    replies: Comment[];
    image: string;
    created_at: number;
    comment_origin: number | null;
    post: number;
}
export type { Comment }