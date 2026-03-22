import { Outlet } from "react-router";
import checkRoute from "../composables/useAbilities";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function MainLayout() {
    const navigate = useNavigate();
    const { isAuth, location } = checkRoute();

    useEffect(() => {
        if (isAuth && location.pathname.includes('/Auth')) {
            navigate("/");
        }
    }, [isAuth, location, navigate]);

    return (
        <div>
            <Outlet />
        </div>
    );
}
