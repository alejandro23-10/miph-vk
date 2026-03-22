import { Outlet } from "react-router";
import checkRoute from "../composables/useAbilities";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Navigator from "../components/Navigator/Navigator";

export default function MainLayout() {
    const navigate = useNavigate();
    const { isAuth, location } = checkRoute();
    useEffect(() => {
        if (isAuth && location.pathname === '/') {
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
