import { useEffect, useMemo, useState } from "react";
import { useMouseTrail } from "../../hooks/useMouseTrail";

import DialogueBox from "../dialogue-box/DialogueBox";
import star from "../../assets/images/star.png";
import newsparkle from "../../assets/images/new-sparkle.png";

import { SpaceSection, SparkleDiv } from "./Space.styled";

const Space = () => {
    const mouseTrail = useMouseTrail();
    const [count, setCount] = useState(0);

    const walkForward = () => {
        setCount((currCount) => currCount + 1);
        updateStars(true);
    }

    const walkBackward = () => {
        setCount((currCount) => {
            if (currCount === 0) {
                return currCount;
            } else {
                updateStars(false);
                return currCount - 1;
            }
        });
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


    const [starLayers, setStarLayers] = useState(() =>
        [1, 2, 3, 4, 5].map((row) => {
            return {
                row,
                stars: Array.from({ length: 15 }, (_, index) => ({
                    id: index,
                    top: `${Math.floor(Math.random() * 85) + 5}%`,
                    left: `${Math.floor(Math.random() * 85) + 5}%`,
                    width: `${row * 5}px`,
                    filter: `blur(0px)`,
                    opacity: "1",
                }))
            }
        })
    );

    const updateStars = (isForward: boolean) => {
        setStarLayers((prevLayers) =>
            prevLayers.map((layer) => {
                const positionDiff = layer.row * .05;
                const widthDiff = layer.row * .5;
                const opacityDiff = layer.row * .01;

                return {
                    ...layer,
                    stars: layer.stars.map((star) => {
                        const topValue = parseFloat(star.top);
                        const leftValue = parseFloat(star.left);
                        const imgWidth = parseFloat(star.width);

                        let newBlur = parseFloat(star.filter.replace("blur(", "").replace("px)", ""));
                        if (isForward && imgWidth > 20) {
                            newBlur = newBlur + .5;
                        } else if (!isForward && imgWidth > 20) {
                            newBlur = newBlur - .5;
                        }

                        return {
                            ...star,
                            top: `${topValue >= 50
                                ? topValue + (isForward ? positionDiff : -positionDiff)
                                : topValue + (isForward ? -positionDiff : positionDiff)
                                }%`,
                            left: `${leftValue >= 50
                                ? leftValue + (isForward ? positionDiff : -positionDiff)
                                : leftValue + (isForward ? -positionDiff : positionDiff)
                                }%`,
                            width: `${imgWidth + (isForward ? widthDiff : -widthDiff)}px`,
                            filter: `blur(${newBlur}px)`,
                            opacity: `${parseFloat(star.opacity) + (isForward ? -opacityDiff : opacityDiff)}`,
                        }
                    })
                }
            })
        );
    }

    const createStarLayer = (layer: typeof starLayers[number]) => {
        return (
            <SparkleDiv key={layer.row}>
                {layer.stars.map((star) => (
                    <img
                        key={star.id}
                        src={newsparkle}
                        className={`stars row-${layer.row}`}
                        style={{
                            position: "fixed",
                            width: star.width,
                            top: star.top,
                            left: star.left,
                            filter: star.filter,
                            opacity: star.opacity,
                            transition: "top 300ms ease, left 300ms ease, width 300ms ease, opacity 300ms ease, filter 300ms ease",
                        }}
                    />
                ))}
            </SparkleDiv>
        );
    };

    return (
        <>
            {mouseTrail(star)}
            <SpaceSection>
                {starLayers.map(createStarLayer)}
            </SpaceSection>
            <DialogueBox text="Welcome to my space. Thank you for visiting. Proceed with caution and curiosity." canExit />
        </>
    )
}

export default Space;