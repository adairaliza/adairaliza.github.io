import { useEffect } from "react";

import { typewriter } from "../../util/index";

import { IDialogueOption } from "./IDialogueOption";
import { DialogueSection } from "./DialogueSection.styled";
import { DialogueStyled } from "../main/Main.styled";

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
            <div className="border">
                {canExit && (
                    <button
                        onClick={() => console.log("this will eventually do something :)")}
                    >x</button>
                )}
                <h3 id="dialogueText"></h3>
                <DialogueStyled>
                    <div>
                        {options?.map((option: IDialogueOption, index) => {
                            return (
                                <span>
                                    <h3
                                        key={`dialogue-option-${index}`}
                                        id={`dialogue-option-${index}`}
                                        onClick={() => option.optionHandler()}
                                    ></h3>
                                </span>
                            )
                        })}
                    </div>
                </DialogueStyled>
            </div>
        </DialogueSection>
    )
}

export default DialogueBox;