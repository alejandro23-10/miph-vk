import { Outlet } from "react-router";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Navigator from "../components/Navigator/Navigator";
import useCheckRoute from "../composables/useAbilities";
import './chats.css'
import { chats } from "../data/Chats";
import type { Chat } from "../types/Chat";
import ChatComponent from "../components/ChatComponent/ChatComponent";

export default function ChatsLayout() {
    const navigate = useNavigate();
    const { isAuth, location } = useCheckRoute();
    useEffect(() => {
        if (isAuth == false && location.pathname === '/chats') {
            navigate("/Auth/login");
        }
    }, [isAuth, location, navigate]);
    
    const [selectedChat, setSelectedChat] = useState<null | number>(null)

    function takeChat(chat: Chat) {
        return  <div onClick={() => selectChat(chat.id)}>< ChatComponent chat={chat} selected={chat.id == selectedChat}/> </div>
        
    }
    function selectChat(chatId: number){
        console.log(chatId)
        setSelectedChat(chatId)
    
    }

    useEffect(() => {
        console.log(chats.map(takeChat))
    }, [])
    return (
        <div>
            <Outlet />
            <Navigator />
            <div className="chats-look" >
                {chats.map(takeChat)}
            </div>
        </div>
    );
}