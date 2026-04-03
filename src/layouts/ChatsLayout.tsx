import { Outlet } from "react-router";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Navigator from "../components/Navigator/Navigator";
import useCheckRoute from "../composables/useAbilities";
import './chats.css'
import { chats } from "../data/Chats";
import type { Chat } from "../types/Chat";

export default function MainLayout() {
    const navigate = useNavigate();
    const { isAuth, location } = useCheckRoute();
    useEffect(() => {
        if (isAuth == false && location.pathname === '/chats') {
            navigate("/Auth/login");
        }
    }, [isAuth, location, navigate]);
      
    function takeId(a: Chat) {
        return (<div>{a.id}</div>)

    }
    useEffect(() => {
        console.log(chats.map(takeId))
    }, [])
    return (
        <div>
            <Outlet />
            <Navigator />
            <div className="chats-look">
                {chats.map(takeId)}
            </div>
        </div>
    );
}