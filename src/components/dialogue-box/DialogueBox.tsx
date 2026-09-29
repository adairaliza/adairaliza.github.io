import { useEffect, useState } from "react";
import { DialogueSection } from "./DialogueSection.styled";
import { IDialogueOption } from "./IDialogueOption";
import { typewriter } from "../../util";

const DialogueBox = ({
    text,
    options,
    canExit
}: {
    text: string,
    options?: IDialogueOption[],
    canExit?: boolean,
}) => {
    useEffect(() => {
        handleTyping();
    }, []);

    const handleTyping = async () => {
        const isDone = await typewriter(text, "dialogueText");
        if (isDone && options) {
            options.map((option: IDialogueOption, index) => {
                typewriter(option.optionText, `dialogue-option-${index}`);
            });
        }
    }

    return (
        <DialogueSection>
            <div>
                {canExit && (
                    <button
                        onClick={() => console.log("this will eventually do something :)")}
                    >x</button>
                )}
                <h2 id="dialogueText" className="blur"></h2>
                {options?.map((option: IDialogueOption, index) => {
                    return (
                        <a
                            key={`dialogue-option-${index}`}
                            id={`dialogue-option-${index}`}
                            className="blur"
                            onClick={() => option.optionHandler()}
                        ></a>
                    )
                })}
            </div>
        </DialogueSection>
    )
}

export default DialogueBox;