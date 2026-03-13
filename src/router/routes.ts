
import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import Chats from "../pages/Chat";
import ChatId from "../pages/ChatId";
import User from "../pages/User";
import UserId from "../pages/UserId";
import register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import MainLayout from "../layouts/MainLayout";
import ChatsLayout from "../layouts/ChatsLayout"
import AuthLayout from "../layouts/AuthLayout"
import ChatsPage from "../pages/ChatsPage"

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
              path: '',
              Component: HomePage  
            },
            {
                path: "chats",
                Component: Chats,
            },
            {
                path: ":chatId",
                Component: ChatId
            },
            {
                path: "user",
                Component: User,
            },
                
            {
                path: "userId",
                Component: UserId
            },
            {
                path: "profile",
                Component: Profile
            }
        ]
    },
        {path:"/auth",
        Component: AuthLayout,
        children: [
            {
                path: "register",
                Component: register,
            },
            {
                path: "login",
                Component: Login
            }, 
        ]
    },
        {path: "/chats",
        Component: ChatsLayout,
        children: [
            {path: "",
            Component: ChatsPage
            },
            {path: ":chatId",
            Component: ChatId
            }
        ]

    }
]);
export default router;