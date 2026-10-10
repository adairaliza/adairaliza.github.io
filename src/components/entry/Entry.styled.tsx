import styled from "styled-components";

export const EntrySection = styled.section`
    position: absolute;
    text-align: center;
`;

export const MouseTrail = styled.div<{ x: number, y: number }>`
    position: fixed;
    width: 4rem;
    left: ${({ x }) => (x)}px;
    top: ${({ y }) => (y)}px;
    transition: left 300ms ease, top 300ms ease;

    img {
        width: 100%;
    }
`;