import { useState, useEffect } from "react";
import { MouseTrail } from "../components/main/Main.styled";

export function useMouseTrail() {
    const [mouseCoord, setMouseCoord] = useState({ x: 0, y: 0 });
    const [mouseTrail, setMouseTrail] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const xValues = [mouseCoord.x, mouseTrail.x].sort((a, b) => a - b);
        const yValues = [mouseCoord.y, mouseTrail.y].sort((a, b) => a - b);

        if (
            mouseTrail.x === 0 ||
            (xValues[1] % xValues[0]) > 5 ||
            (yValues[1] % yValues[0]) > 5
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

    const assignMouseImg = (img: string) => {
        return (
            <MouseTrail x={mouseTrail.x} y={mouseTrail.y}>
                <img className="mouse-trail" src={img} />
            </MouseTrail>
        )
    }
    return assignMouseImg;
}