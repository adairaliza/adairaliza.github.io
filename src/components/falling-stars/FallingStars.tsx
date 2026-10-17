import { useEffect } from "react";
import { getRandomNumber } from "../../util";
import { FallingStarsStyled } from "./FallingStars.styled";

const FallingStars = () => {
    const starSymbols = ["★", "☆", "⭑", "✧", "✦", "✦", "✦", "✦", "✦", "✦", "✴",];
    setInterval(() => createRandomStar(), 500);

    const createRandomStar = () => {
        console.log("creating random...");
        console.log(window.innerWidth);
        const parent = document.getElementById("night-sky");
        // const randomStar = starSymbols[getRandomNumber(0, starSymbols.length, true)];
        const randomPosition = `${getRandomNumber(0, window.innerWidth, true)}px`;
        const randomSize = `${getRandomNumber(15, 30, true)}px`
        const starEl = document.createElement("p");
        starEl.textContent = "✦";
        starEl.style.left = randomPosition;
        starEl.style.fontSize = randomSize;
        parent?.appendChild(starEl);

        if (parent && parent.childNodes.length > 50) {
            parent.removeChild(parent.childNodes[0]);
        }
    }

    return (
        <FallingStarsStyled>
            <div id="night-sky" />
        </FallingStarsStyled>
    )

}

export default FallingStars;