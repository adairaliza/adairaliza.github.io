import styled from "styled-components";

export const CemeterySection = styled.section`
    position: absolute;
    text-align: center;
    height: 200vh;
    width: 200vw;
    transform: translateX(-50vw) translateY(20vh);

    #cemetery-rows {
        display: flex;
        flex-direction: column-reverse;
        text-align: center;
        margin: auto;
        height: 100%;
    }

    [id^="cemetery-row-"] {
        display: flex;
        justify-content: space-between;
        text-align: center;
        margin-top: 1rem;
        margin-right: auto;
        margin-left: auto;
    }

    [id$="-headstone"] {
        height: 100%;
    }
`;

export const CemeteryRow = styled.div<{ index: number, pos: number }>`
    z-index: ${({ pos }) => pos};
    margin: auto;
    width: ${({ index }) => (30 + (index * 2))}%;
    transition: width 333ms ease, bottom 333ms ease, left 333ms ease;
    position: fixed;
    bottom: ${({ index, pos }) => (70 - (index * (pos * 0.1)))}%;
    left: ${({ index, pos }) => ((33 + (pos ^ 2)) - (index * (pos * 0.1)))}%;

    
    // left: ${({ index }) => (35 - index)}%;

    svg {
        transition: width 333ms ease, height 333ms ease;
    }
`;

export const GraveStyled = styled.div<{ index: number } >`
    // width: ${({ index }) => (8 - index) * 2}rem;
    // font-size: ${({ index }) => (150 - (index * 5))}%;
`;