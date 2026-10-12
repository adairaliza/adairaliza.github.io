import { useEffect, useState } from "react";
import { useMouseTrail } from "../../hooks/useMouseTrail";

import DialogueBox from "../dialogue-box/DialogueBox";
import star from "../../assets/images/star.png";

import { EntrySection } from "./Entry.styled";

const Entry = () => {
    const mouseTrail = useMouseTrail();
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("count", count);
    }, [count]);


    const walkForward = () => {
        setCount((currCount) => currCount + 1);
    }

    const walkBackward = () => {
        setCount((currCount) => currCount === 0 ? currCount : currCount - 1);
    }

    useEffect(() => {
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
            {mouseTrail(star)}
            <EntrySection>

            </EntrySection>
            <DialogueBox text="Choose where you'd like to go next." canExit />
        </>
    )
}

export default Entry;