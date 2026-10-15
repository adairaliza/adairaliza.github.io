import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom";
import { usePageChange } from "../../hooks/usePageChange";

function Main() {
    const location = useLocation();
    const hideOverlay = usePageChange();

    useEffect(() => {
        Array.from(document.getElementsByClassName("blur"))
            .forEach((element) => {
                const text: string = element.textContent || "";
                element.setAttribute("text-content", text);
            });
    }, []);

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
        </>
    );
}

export default Main;