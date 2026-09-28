import { useNavigate } from "react-router-dom";

function Death() {
    const navigate = useNavigate();

    return (
        <main>
            <h1>You died.</h1>
            <h3
                onClick={() => navigate("/")}
            >Try again?</h3>
        </main>
    )
}

export default Death;