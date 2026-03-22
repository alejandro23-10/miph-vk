import { Outlet } from "react-router";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Navigator from "../components/Navigator/Navigator";
import useCheckRoute from "../composables/useAbilities";

export default function MainLayout() {
    const navigate = useNavigate();
    const { isAuth, location } = useCheckRoute();
    useEffect(() => {
        if (isAuth == false && location.pathname === '/chats') {
            navigate("/Auth/login");
        }
    }, [isAuth, location, navigate]);
      
    return (
        <div>
            <Outlet />
            <Navigator />
        </div>
    );
}