import styled from "styled-components";

export const MouseTrail = styled.div`
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

    span {
        display: flex;
        flex-direction: row;
        width: 100%;
        font-size: 1.75rem;
    }

    span::before {
        content: ">";
        opacity: 0;
        transform: translateX(-10px);
        transition: all 300ms ease;
    }

    span:hover::before {
        opacity: 1;
    }

    h3 {
        text-align: left;
        margin-bottom: 0.75rem;
    }

    h3:hover {
        cursor: pointer;
    }
`;