import styled from "styled-components";

export const DialogueSection = styled.section`
    position: fixed;
    bottom: 0%;
    left: 2%;
    width: 96%;
    z-index: 99;

    div {
        display: flex;
        flex-direction: column;
        text-align: center;
        border: 3px solid white;
        padding: 2rem 4rem;

        animation: entryAnimation 3s forwards, opacityAnimation 5s forwards;
    }

    @keyframes opacityAnimation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes entryAnimation {
        from {
            margin-bottom: 0%;
        }
        to {
            margin-bottom: 2%;
        }
    }

    a {
        width: fit-content;
        margin:auto;
        font-size: 2rem;
        border-bottom: 1px solid transparent;
        transition: 
            border-bottom-color 1s ease, 
            filter 3s ease, 
            text-shadow 3s ease;
    }

    a:hover {
        cursor: pointer;
        border-bottom-color: white;
    }

    a:first-of-type {
        margin-top: 1rem;
    }

    button {
        border: none;
        background: none;
        color: white;
        font-family: "Alagard";
        font-size: 1.5rem;
        position: absolute;
        left: 93%;
        bottom: 75%;
    }

    button:hover {
        cursor: pointer;
    }
`;