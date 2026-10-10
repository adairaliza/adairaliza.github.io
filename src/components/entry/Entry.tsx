import { ReactNode, useEffect, useState } from "react";
import DialogueBox from "../dialogue-box/DialogueBox";
import HeadstoneOption from "../headstone-option/HeadstoneOption";
import { CemeterySection, CemeteryRow, GraveStyled } from "./Entry.styled";
import { HeadstoneSvg } from "../headstone-svg/HeadstoneSvg";

interface Grave {
    title: string;
    id: string;
}

interface CemeteryRow {
    rowNumber: number;
    rowContents: Grave[];
    startingPosition: number;
}

interface Cemetery {
    rows: CemeteryRow[];
}

const headstones2: Grave[] = [
    {
        title: "artwork",
        id: "art-headstone",
    }
]

const headstones1: Grave[] = [
    {
        title: "music collection",
        id: "music-headstone",
    },
    {
        title: "beloved books",
        id: "books-headstone",
    },
]

const cemetery: Cemetery = {
    rows: [
        {
            rowNumber: 2,
            rowContents: headstones1,
            startingPosition: 2,
        },
        {
            rowNumber: 1,
            rowContents: headstones2,
            startingPosition: 1,
        }
    ]
}

const Entry = () => {
    const [count, setCount] = useState(0);

    const walkForward = () => {
        setCount((currCount) => currCount + 0.5);
    }

    const walkBackward = () => {
        setCount((currCount) => currCount === 0 ? currCount : currCount - 0.5);
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

    useEffect(() => {
        console.log("==========HERE==========");

        console.log(`bottom for front row: ${70 - ((2 + count) * (2 * 0.1))}`);
        console.log(`bottom for second row: ${70 - ((1 + count) * (1 * 0.1))}`);

        console.log(`left for front row: ${(33 + (2 ^ 2)) - ((2 + count) * (2 * 0.1))}`);
        console.log(`left for second row: ${(33 + (1 ^ 2)) - ((1 + count) * (1 * 0.1))}`);

        console.log("===========END===========");
    }, [count]);


    const renderGraves = (): ReactNode => {
        return (
            <section id="cemetery-rows">
                {cemetery.rows.map((row: CemeteryRow) => (
                    <CemeteryRow
                        index={row.rowNumber + count}
                        id={`cemetery-row-${row.rowNumber}`}
                        pos={row.startingPosition}
                    >
                        {row.rowContents.map((grave: Grave) => (
                            <GraveStyled index={row.rowNumber + count}
                                className={`grave-in-row-${row.rowNumber}`}
                                id={grave.id}
                                key={grave.id}
                            >
                                <HeadstoneSvg label={grave.title} index={row.rowNumber} count={count} />
                            </GraveStyled>
                        ))}
                    </CemeteryRow>
                ))}
            </section>
        );
    }

    return (
        <>
            <CemeterySection>
                {renderGraves()}
            </CemeterySection>
            <DialogueBox text="Choose where you'd like to go next." canExit />
        </>
    )
}

export default Entry;