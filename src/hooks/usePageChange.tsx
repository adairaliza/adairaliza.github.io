import { useNavigate } from "react-router-dom";
import { FADE_OUT } from "../constants";

export function usePageChange() {
    const navigate = useNavigate();

    const changePage = (url: string, hide: boolean) => {
        const overlay = document.getElementById("overlay");
        if (overlay && hide)
            overlay.style.opacity = "1";

        if (overlay && !hide)
            overlay.style.opacity = "0";

        if (url.length)
            setTimeout(() => navigate(url), FADE_OUT);
    }

    return changePage;
}