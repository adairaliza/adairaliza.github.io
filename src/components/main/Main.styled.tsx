import styled from "styled-components";

export const MouseTrail = styled.div`
    z-index: -1;
    .star-div {
        animation: disappearAnimation 1s forwards;
    }

    @keyframes disappearAnimation {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;

export const DialogueStyled = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;

    div {
        margin: 0 auto;
        width: fit-content;
        white-space: nowrap;
    }

    button {
        background: none;
        font-family: "Alagard";
        border: none;

        color: white;
        display: flex;
        flex-direction: row;
        width: 100%;
        font-size: 1.75rem;
    }

    button::before {
        content: ">";
        opacity: 0;
        transform: translateX(-10px);
        transition: all 300ms ease;
    }

    button:hover::before {
        opacity: 1;
    }

    h3 {
        text-align: left;
        margin-bottom: 0.75rem;
    }

    button:hover {
        cursor: pointer;
    }
`;