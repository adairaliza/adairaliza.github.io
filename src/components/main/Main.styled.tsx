import styled from "styled-components";

export const MouseTrail = styled.div<{ x: number, y: number }>`
    position: fixed;
    width: 4rem;
    left: ${({ x }) => (x)}px;
    top: ${({ y }) => (y)}px;
    transition: left 400ms ease, top 400ms ease;

    opacity: 0;
    animation: fadeIn 3s ease-in forwards; 

    img {
        width: 100%;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        30% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;