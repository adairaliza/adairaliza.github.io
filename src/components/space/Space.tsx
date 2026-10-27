import { useCallback, useEffect, useState, useRef } from "react";
import { useMouseTrail } from "../../hooks/useMouseTrail";
import { usePageChange } from "../../hooks/usePageChange";

import star from "../../assets/images/star.png";
import newsparkle from "../../assets/images/new-sparkle.png";
import sparkle from "../../assets/images/sparkle.svg";
import { blackHoleList } from "../../constants";

import { BlackHoleDiv, SpaceSection, SparkleDiv } from "./Space.styled";

const imgs = [newsparkle, sparkle];

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
const Space = ({ active }: { active: Boolean }) => {
    const mouseTrail = useMouseTrail();
    const navigate = usePageChange();
    const countRef = useRef(0);
    const pendingDirectionRef = useRef(0);
    const frameRef = useRef(0);

    const [starLayers, setStarLayers] = useState(() =>
        [1, 2, 3, 4, 5, 6, 7, 8].map((row) => {
            const imgIndex = Math.floor(Math.random() * imgs.length);
            const lengthAmt = Math.floor(Math.random() * 15 + 10);

            return {
                imgIndex,
                row,
                stars: Array.from({ length: lengthAmt }, (_, index) => ({
                    id: index,
                    imgIndex: Math.floor(Math.random() * imgs.length),
                    top: Math.random() * 95,
                    left: Math.random() * 95,
                    translateX: 0,
                    translateY: 0,
                    width: row * 2,
                    blur: 0,
                    opacity: 1,
                }))
            }
        })
    );

    const updateStars = useCallback((isForward: boolean) => {
        setStarLayers((prevLayers) =>
            prevLayers.map((layer) => {
                const positionDiff = layer.row * .05;
                const widthDiff = layer.row * .75;
                const opacityDiff = layer.row * .0085;

                return {
                    ...layer,
                    stars: layer.stars.map((star) => {
                        let blurValue = star.blur;
                        if (isForward && star.width > 25) {
                            blurValue += .5;
                        } else if (!isForward && star.width > 20) {
                            blurValue -= .5;
                        }

                        const direction = isForward ? 1 : -1;
                        const horizontalDirection = star.left >= 50 ? 1 : -1;
                        const verticalDirection = star.top >= 50 ? 1 : -1;

                        return {
                            ...star,
                            translateX: star.translateX + horizontalDirection * positionDiff * direction,
                            translateY: star.translateY + verticalDirection * positionDiff * direction,
                            width: star.width + widthDiff * direction,
                            blur: blurValue,
                            opacity: star.opacity - opacityDiff * direction,
                        };
                    })
                }
            })
        );
    }, []);

    useEffect(() => {
        if (active) {
            const handleScroll = (event: any) => {
                if (event.deltaY === 0) return;

                pendingDirectionRef.current = event.deltaY < 0 ? 1 : -1;

                frameRef.current = requestAnimationFrame(() => {
                    const direction = pendingDirectionRef.current;
                    pendingDirectionRef.current = 0;
                    frameRef.current = 0;

                    const nextCount = Math.max(0,
                        Math.min(75, countRef.current + direction));

                    if (nextCount === countRef.current) return;

                    countRef.current = nextCount;
                    updateStars(direction > 0);
                });
            }

            window.addEventListener("wheel", handleScroll, {
                passive: true,
            });

            return () => {
                window.removeEventListener("wheel", handleScroll);
                if (frameRef.current !== 0) {
                    cancelAnimationFrame(frameRef.current);
                    frameRef.current = 0;
                }
                pendingDirectionRef.current = 0;
            }
        }
    }, [active, updateStars]);

    const createStarLayer = (layer: typeof starLayers[number]) => {
        return (
            <SparkleDiv key={layer.row}>
                {layer.stars.map((star) => {
                    return <img
                        key={star.id}
                        src={imgs[star.imgIndex]}
                        className={`stars row-${layer.row}`}
                        style={{
                            position: "fixed",
                            width: `${star.width}px`,
                            top: `${star.top}%`,
                            left: `${star.left}%`,
                            filter: `blur(${star.blur}px)`,
                            opacity: star.opacity,
                            transform: `translate(${star.translateX}vw, ${star.translateY}vh)`,
                            transition: "transform 300ms ease, width 300ms ease, opacity 300ms ease, filter 300ms ease",
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
            {active && mouseTrail(star)}
            <SpaceSection>
                {countRef.current > 25 &&
                    <BlackHoleDiv visibility={countRef.current - 25}>
                        <button
                            onClick={() => navigateToBlackHole()}
                        >click me</button>
                    </BlackHoleDiv>
                }
                {starLayers.map(createStarLayer)}
            </SpaceSection>
        </>
    )
}

export default Space;