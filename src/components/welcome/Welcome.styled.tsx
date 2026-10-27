import styled from "styled-components";

export const WelcomeSection = styled.section`
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    
    animation: entryAnimation 3s forwards;

    &.margin-1 {
        margin-top: 2px;
        margin-bottom: -2px;
    }
    &.margin-2 {
        margin-top: 4px;
        margin-bottom: -4px;
    }
    &.margin-3 {
        margin-top: 6px;
        margin-bottom: -6px;
    }
    &.margin-4 { 
        margin-top: 8px;
        margin-bottom: -8px;
    }
    &.margin-5 { 
        margin-top: 10px;
        margin-bottom: -10px;
    }

    #welcome-box {
        z-index: 100;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        border: 5px solid #fff;
        background: black;
        width: clamp(60rem, 75vw, 85rem);
        height: clamp(30rem, 40vw, 52rem);
        transition: opacity 1.5s ease;
    }

    #border-decor {
        inset: 0;
        position: absolute;
    }

    [id^="decor-"] {
        position: absolute;
        width: 20rem;
    }

    #decor-top {
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        padding-bottom: 5rem;
    }

    #decor-right {
        top: 50%;
        right: 0;
        transform: translate(50%, -50%) rotate(90deg);
        padding-bottom: 5rem;
    }

    #decor-bottom {
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%) rotate(180deg);
        padding-bottom: 5rem;
    }

    #decor-left {
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%) rotate(-90deg);
        padding-bottom: 5rem;
    }

    h1, h3 {
        margin-bottom: 3rem;
        text-align: center;
        letter-spacing: .2rem;
        width: 100%;
        transition: filter 3s ease, text-shadow 3s ease;
    }

    h1:hover {
        cursor: default;
    }

    @keyframes entryAnimation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
;`