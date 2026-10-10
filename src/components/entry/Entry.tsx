import { useEffect, useState } from "react";
import DialogueBox from "../dialogue-box/DialogueBox";
import { EntrySection, MouseTrail } from "./Entry.styled";
import tombstone from "../../assets/images/tombstone.jpg";

const Entry = () => {
    const [count, setCount] = useState(0);
    const [mouseCoord, setMouseCoord] = useState({ x: 0, y: 0 });
    const [mouseTrail, setMouseTrail] = useState({ x: 0, y: 0 })

    useEffect(() => {
        console.log("count", count);
    }, [count]);
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

    const walkForward = () => {
        setCount((currCount) => currCount + 1);
    }

    const walkBackward = () => {
        setCount((currCount) => currCount === 0 ? currCount : currCount - 1);
    }

    const updateMouse = (x: number, y: number) => {
        setMouseCoord({ x, y });
    }

    useEffect(() => {
        window.addEventListener("mousemove", (event: any) =>
            updateMouse(event.clientX, event.clientY)
        );

        window.addEventListener("wheel", (event: any) => {
            const scrollDirection = event?.wheelDelta;
            if (scrollDirection > 0) {
                walkForward();
            } else if (scrollDirection < 0) {
                walkBackward();
            }
        });
    }, []);


    return (
        <>
            <EntrySection>
                <h1>Music collection</h1>
            </EntrySection>
            <MouseTrail x={mouseTrail.x} y={mouseTrail.y}>
                <img className="mouse-trail" src={tombstone} />
            </MouseTrail>
            <DialogueBox text="Choose where you'd like to go next." canExit />
        </>
    )
}

export default Entry;