import styled from "styled-components";

export const FallingStarsStyled = styled.section`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: -100;

    #night-sky {
        position: fixed;
        width: 100%;

        p {
            opacity: 0;
            position: absolute;
            top: 0px;
            animation: fallingStar 10s linear;
        }
    }

    @keyframes fallingStar {
        0% {
            transform: translateY(-100px);
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
            transform: translateY(1000px);
            opacity: 0;
        }
    }

`;