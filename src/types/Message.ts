type Message = {
    id: number;
    text: string;
    from_user: number;
    image: string;
    created_at: number;
    reply_to: number | null;
    chat: number
}
export type { Message }