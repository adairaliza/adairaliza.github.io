import styled from "styled-components";

export const FallingStarsStyled = styled.section`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: -100;

    [id^="night-sky"] {
        position: fixed;
        width: 100%;

        p {
            opacity: 0;
            position: absolute;
            top: 0px;
        }
    }
`;

export const NightSkyDiv = styled.div<{ level: number }>`
    opacity: .${({ level }) => 6 + level};
    p {
        font-size: ${({ level }) => 60 - (15 * level)}px;
        filter: blur(${({ level }) => (8 - (level + (level * 2)))}px);
        // animation: fallingStar ${({ level }) => (40 - (level * 10))}s linear;
        animation: fallingStar ${({ level }) => level === 3 ? 50 : level === 2 ? 15 : 8}s linear;
    }

    

    @keyframes fallingStar {
        0% {
            transform: translateY(-50px);
            opacity: 1;
        }

        10% {
            opacity: .5;
        }

        20% {
            opacity: 1;
        }

        30% {
            opacity: .3;
        }

        40% {
            opacity: 1;
        }

        50% {
            opacity: .6;
        }

        60% {
            opacity: 1;
        }

        70% {
            opacity: .4;
        }

        80% {
            opacity: 1;
        }

        100% {
            transform: translateY(1200px);
            opacity: 0;
        }
    }
`;