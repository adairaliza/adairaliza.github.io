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
            rowNumber: 1,
            rowContents: headstones1,
        },
        // {
        //     rowNumber: 2,
        //     rowContents: headstones2,
        // }
    ]
}

const Entry = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count);
    }, [count]);

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



    const renderGraves = (): ReactNode => {
        return (
            <section id="cemetery-rows">
                {cemetery.rows.map((row: CemeteryRow) => (
                    <CemeteryRow index={row.rowNumber + count} id={`cemetery-row-${row.rowNumber}`}>
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