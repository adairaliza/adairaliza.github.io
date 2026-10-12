import styled from "styled-components";

export const SpaceSection = styled.section`
    position: absolute;
    text-align: center;
`;

export const SparkleDiv = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
`;

export const BlackHoleDiv = styled.div<{ visibility: number }>`
    display: flex;
    width: 100vw;
    height: 100vh;
    
    button {
        width: ${({ visibility }) => visibility}px;
        height: ${({ visibility }) => visibility}px;
        opacity: ${({ visibility }) => visibility * 3}%;
        margin: auto;

        &:hover {
            cursor: pointer;
        }
    }
`;