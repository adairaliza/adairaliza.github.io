import { useEffect, useState } from "react";
import { useMouseTrail } from "../../hooks/useMouseTrail";
import { usePageChange } from "../../hooks/usePageChange";

import DialogueBox from "../dialogue-box/DialogueBox";
import star from "../../assets/images/star.png";
import newsparkle from "../../assets/images/new-sparkle.png";
import sparkle from "../../assets/images/sparkle.svg";
import { blackHoleList } from "../../constants";

import { BlackHoleDiv, SpaceSection, SparkleDiv } from "./Space.styled";

/* 
* Will consist of surface-level things about me
* Things that I see, hear, own
* Links:
* Music site
* Art site
* List of favorites (main thing in mind is media? and books?)
* ^ maybe I'll have a "bookshelf" site that holds my favorite books
* ^ but also my favorite movies / shows / animes
* Quote site (maybe related to the bookshelf site)
*/
const Space = () => {
    const mouseTrail = useMouseTrail();
    const navigate = usePageChange();
    const [count, setCount] = useState(0);
    const imgs = [newsparkle, sparkle];

    useEffect(() => {
        console.log("count:", count);
    }, [count]);

    const walkForward = () => {
        setCount((currCount) => {
            if (currCount === 75) {
                return currCount;
            } else {
                updateStars(true);
                return currCount + 1;
            }
        });
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
        [1, 2, 3, 4, 5, 6, 7, 8].map((row) => {
            const imgIndex = Math.floor(Math.random() * imgs.length);
            const lengthAmt = Math.floor(Math.random() * 15 + 10);

            return {
                imgIndex,
                row,
                stars: Array.from({ length: lengthAmt }, (_, index) => ({
                    id: index,
                    top: `${Math.floor(Math.random() * 85) + 5}%`,
                    left: `${Math.floor(Math.random() * 85) + 5}%`,
                    width: `${row * 2}px`,
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
                const opacityDiff = layer.row * .0085;

                return {
                    ...layer,
                    stars: layer.stars.map((star) => {
                        const topValue = parseFloat(star.top);
                        const leftValue = parseFloat(star.left);
                        const imgWidth = parseFloat(star.width);

                        let newBlur = parseFloat(star.filter.replace("blur(", "").replace("px)", ""));
                        if (isForward && imgWidth > 25) {
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
                {layer.stars.map((star) => {
                    return <img
                        key={star.id}
                        src={imgs[layer.imgIndex]}
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
                })}
            </SparkleDiv>
        );
    };

    const navigateToBlackHole = () => {
        const randomUrl = Math.floor(Math.random() * blackHoleList.length);
        navigate(`/${blackHoleList[randomUrl]}`, true);
    }

    return (
        <>
            {mouseTrail(star)}
            <SpaceSection>
                {count > 30 &&
                    <BlackHoleDiv visibility={count - 30}>
                        <button
                            onClick={() => navigateToBlackHole()}
                        >.</button>
                    </BlackHoleDiv>
                }
                {starLayers.map(createStarLayer)}
            </SpaceSection>
            <DialogueBox text="Welcome to my space. Thank you for visiting. Proceed with caution and curiosity." canExit />
        </>
    )
}

export default Space;