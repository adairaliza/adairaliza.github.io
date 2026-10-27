import { useEffect, useState, useRef } from "react";
import { useMouseTrail } from "../../hooks/useMouseTrail";
import { usePageChange } from "../../hooks/usePageChange";

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
const Space = ({ active }: { active: Boolean }) => {
    const mouseTrail = useMouseTrail();
    const navigate = usePageChange();
    const imgs = [newsparkle, sparkle];

    const countRef = useRef(0);
    const pendingDirectionRef = useRef(0);
    const frameRef = useRef(0);

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
                }
            }
        }
    }, [active]);


    const [starLayers, setStarLayers] = useState(() =>
        [1, 2, 3, 4, 5, 6, 7, 8].map((row) => {
            const imgIndex = Math.floor(Math.random() * imgs.length);
            const lengthAmt = Math.floor(Math.random() * 15 + 10);

            return {
                imgIndex,
                row,
                stars: Array.from({ length: lengthAmt }, (_, index) => ({
                    id: index,
                    top: Math.random() * 95,
                    left: Math.random() * 95,
                    width: row * 2,
                    blur: 0,
                    opacity: 1,
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
                        let blurValue = star.blur;
                        if (isForward && star.width > 25) {
                            blurValue = blurValue + .5;
                        } else if (!isForward && star.width > 20) {
                            blurValue = blurValue - .5;
                        }

                        return {
                            ...star,
                            top: star.top >= 50
                                ? star.top + (isForward ? positionDiff : -positionDiff)
                                : star.top + (isForward ? -positionDiff : positionDiff),
                            left: star.left >= 50
                                ? star.left + (isForward ? positionDiff : -positionDiff)
                                : star.left + (isForward ? -positionDiff : positionDiff),
                            width: star.width + (isForward ? widthDiff : -widthDiff),
                            filter: blurValue,
                            opacity: star.opacity + (isForward ? -opacityDiff : opacityDiff),
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
                            width: `${star.width}px`,
                            top: `${star.top}%`,
                            left: `${star.left}%`,
                            filter: `blur(${star.blur}px)`,
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
                {countRef.current > 30 &&
                    <BlackHoleDiv visibility={countRef.current - 30}>
                        <button
                            onClick={() => navigateToBlackHole()}
                        >.</button>
                    </BlackHoleDiv>
                }
                {starLayers.map(createStarLayer)}
            </SpaceSection>
        </>
    )
}

export default Space;