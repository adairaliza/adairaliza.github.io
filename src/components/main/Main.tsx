import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom";
import { usePageChange } from "../../hooks/usePageChange";
import FallingStars from "../falling-stars/FallingStars";

function Main() {
    const location = useLocation();
    const hideOverlay = usePageChange();

    useEffect(() => {
        hideOverlay("", false);
    }, [location]);

    return (
        <>
            <div id="overlay" style={{
                pointerEvents: "none",
                position: "fixed",
                width: "100vw",
                height: "100vh",
                backgroundColor: "black",
                zIndex: "999",
                opacity: "0",
                transition: "opacity 1s ease",
            }} />
            <Outlet />
            <FallingStars />
        </>
    );
}

export default Main;