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

    .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        border: 5px solid #fff;
        width: 90rem;
        height: 50rem;
    }

    #border-decor {
        position: fixed;
        width: 90rem;
        height: 50rem;
    }

    [id^="decor-"] {
        position: absolute;
        width: 20rem;
    }

    #decor-top {
        transform: translateX(35rem) translateY(-12rem);
    }

    #decor-right {
        transform: rotate(90deg) translateX(12rem) translateY(-82rem);
    }

    #decor-bottom {
        transform: rotate(180deg) translateX(-35rem) translateY(-42rem);
    }

    #decor-left {
        transform: rotate(-90deg) translateX(-14rem) translateY(-12rem);
    }

    h1, h3 {
        margin-bottom: 3rem;
        text-align: center;
        letter-spacing: .2rem;
        width: 100%;
        transition: filter 3s ease, text-shadow 3s ease;
    }

    h1:hover, h3:hover {
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