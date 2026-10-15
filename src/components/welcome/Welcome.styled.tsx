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
        width: 50rem;
        height: 25rem;
        
    }

    h1, h3 {
        margin-bottom: 2rem;
        text-align: center;
        letter-spacing: .2rem;
        width: 100%;
        transition: filter 3s ease, text-shadow 3s ease;
    }

    h1:hover, h3:hover {
        cursor: default;
    }

    .blur::before {
        position: absolute;
        content: attr(text-content);
        filter: blur(4px);
        text-shadow: 0 0 3px #fff;
        opacity: 75%;
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

export const WelcomeOptions = styled.section`
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
;`