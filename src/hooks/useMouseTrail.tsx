import { useState, useEffect, useRef } from "react";
import { MouseTrail } from "../components/main/Main.styled";
import { getRandomNumber } from "../util";
/*
* Allows for custom cursor trail for each component
*/
export function useMouseTrail() {
    const [mouseCoord, setMouseCoord] = useState({ x: 0, y: 0 });
    const [mouseTrail, setMouseTrail] = useState({ x: 0, y: 0 });
    const givenImg = useRef("");

    useEffect(() => {
        const xValues = [mouseCoord.x, mouseTrail.x].sort((a, b) => a - b);
        const yValues = [mouseCoord.y, mouseTrail.y].sort((a, b) => a - b);

        if (
            mouseTrail.x === 0 ||
            (xValues[1] % xValues[0]) > 10 ||
            (yValues[1] % yValues[0]) > 10
        ) {
            setMouseTrail({
                x: mouseCoord.x,
                y: mouseCoord.y
            })
        }
    }, [mouseCoord]);

    const updateMouse = (x: number, y: number) => {
        setMouseCoord({ x, y });
    }

    useEffect(() => {
        window.addEventListener("mousemove", (event: any) =>
            updateMouse(event.clientX, event.clientY)
        );
    }, []);

    useEffect(() => {
        const parent = document.getElementById("trail");
        const starDiv = document.createElement("img");
        starDiv.style.position = "fixed";
        starDiv.style.left = `${mouseTrail.x + getRandomNumber(0, 12, false)}px`;
        starDiv.style.top = `${mouseTrail.y + (getRandomNumber(0, 12, false))}px`;
        starDiv.style.transform = `rotate(${getRandomNumber(0, 180, false)}deg)`
        starDiv.style.width = "1rem";
        starDiv.style.height = "1rem";
        starDiv.setAttribute("class", "star-div");
        starDiv.setAttribute("src", givenImg.current);
        parent?.appendChild(starDiv);

        if (parent && parent.childNodes.length > 20) {
            parent.removeChild(parent.childNodes[0]);
        }
    }, [mouseTrail]);

    const assignMouseImg = (img: string) => {
        if (givenImg.current === "")
            givenImg.current = img;
        return (
            mouseTrail.x !== 0 && mouseTrail.y !== 0 ? (
                <MouseTrail id="trail" />
            ) : <></>
        );
    }
    return assignMouseImg;
}