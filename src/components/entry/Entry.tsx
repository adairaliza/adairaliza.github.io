import { useEffect, useMemo, useState } from "react";
import { useMouseTrail } from "../../hooks/useMouseTrail";

import DialogueBox from "../dialogue-box/DialogueBox";
import star from "../../assets/images/star.png";
import sparkle from "../../assets/images/sparkle.svg";

import { EntrySection, SparkleDiv } from "./Entry.styled";

const Entry = () => {
    const mouseTrail = useMouseTrail();
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("count", count);
    }, [count]);


    const walkForward = () => {
        setCount((currCount) => currCount + 1);
        updateStars(true);
    }

    const walkBackward = () => {
        setCount((currCount) => currCount === 0 ? currCount : currCount - 1);
        updateStars(false);
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

    const updateStars = (isForward: boolean) => {
        const stars = Array.from(document.getElementsByClassName("stars"));
        stars.map((star) => {
            const topValue: any = (star as HTMLElement).style.top.split("%")[0];
            (star as HTMLElement).style.top = isForward ? `${parseInt(topValue) + 1}%` : `${parseInt(topValue) - 1}%`;
        })
    }

    const starLayers = useMemo(() => {
        return [1, 2, 3].map((row) => {
            return {
                row,
                imgWidth: `${20 - (row * 6)}%`,
                stars: Array.from({ length: 3 }, (_, index) => ({
                    id: index,
                    top: `${Math.floor(Math.random() * 100)}%`,
                    left: `${Math.floor(Math.random() * 100)}%`
                }))
            }
        })
    }, []);

    const createStarLayer = (layer: typeof starLayers[number]) => {
        return (
            <SparkleDiv key={layer.row}>
                {layer.stars.map((star) => (
                    <img
                        key={star.id}
                        src={sparkle}
                        className="stars"
                        style={{
                            position: "fixed",
                            width: layer.imgWidth,
                            top: star.top,
                            left: star.left
                        }}
                    />
                ))}
            </SparkleDiv>
        );
    };

    return (
        <>
            {mouseTrail(star)}
            <EntrySection>
                {starLayers.map(createStarLayer)}
            </EntrySection>
            <DialogueBox text="Choose where you'd like to go next." canExit />
        </>
    )
}

export default Entry;