import { getRandomNumber } from "../../util";
import { FallingStarsStyled, NightSkyDiv } from "./FallingStars.styled";

const FallingStars = () => {
    setInterval(() => createRandomStar(3), 500);
    setInterval(() => createRandomStar(2), 1500);
    setInterval(() => createRandomStar(1), 2500);

    /* 3 = far (more, smaller stars) | 2 = mid (less, medium stars) | 1 = close (least, large stars) */
    const createRandomStar = (number: 1 | 2 | 3) => {
        console.log("creating random for", number);
        const parent = document.getElementById(`night-sky-${number}`);
        const randomPosition = `${getRandomNumber(0, window.innerWidth, true)}px`;
        const starEl = document.createElement("p");
        starEl.textContent = "✦";
        starEl.style.left = randomPosition;
        parent?.appendChild(starEl);

        if (parent && parent.childNodes.length > (35 * number)) {
            parent.removeChild(parent.childNodes[0]);
        }
    }

    return (
        <FallingStarsStyled>
            <NightSkyDiv id="night-sky-1" level={1} />
            <NightSkyDiv id="night-sky-2" level={2} />
            <NightSkyDiv id="night-sky-3" level={3} />
        </FallingStarsStyled>
    )

}

export default FallingStars;