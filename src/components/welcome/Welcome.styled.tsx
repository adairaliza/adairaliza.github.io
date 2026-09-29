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
        filter: blur(1px);
        text-shadow: 0 0 5px #fff;
        transition: filter 3s ease, text-shadow 3s ease;
    }

    h3 {
        text-shadow: 0 0 3px #fff;
    }

    h1:hover, h3:hover {
        filter: blur(0);
        text-shadow: unset;
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

export const WelcomeOptions = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;

    div {
        margin: 0 auto;
        width: 30%;
        white-space: nowrap;
    } 

    h3 {
        text-align: left;
        margin-bottom: 0.75rem;
    }
        
    h3:hover {
        cursor: pointer;
    }
;`