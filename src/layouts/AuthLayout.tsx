import { Outlet } from "react-router";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import useCheckRoute from "../composables/useAbilities";

export default function MainLayout() {
    const navigate = useNavigate();
    const { isAuth, location } = useCheckRoute();
    useEffect(() => {
        if (isAuth && location.pathname.includes('/auth')) {
            navigate("/");
        }
    }, [isAuth, location, navigate]);

    return (
        <div>
            <Outlet />
        </div>
    );
}
