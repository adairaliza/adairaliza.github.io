import { DialogueSection } from "./DialogueSection.styled";
import { IDialogueOption } from "./IDialogueOption";

const DialogueBox = ({
    text,
    options,
    canExit
}: {
    text: string,
    options?: IDialogueOption[],
    canExit?: boolean,
}) => {

    return (
        <DialogueSection>
            <div>
                {canExit && (
                    <button
                        onClick={() => console.log("this will eventually do something :)")}
                    >x</button>
                )}
                <h1 className="blur">{text}</h1>
                {options?.map((option: IDialogueOption) => {
                    return (
                        <a
                            className="blur"
                            onClick={() => option.optionHandler()}
                        >{option.optionText}</a>
                    )
                })}
            </div>
        </DialogueSection>
    )
}

export default DialogueBox;