import { usePageChange } from "../../hooks/usePageChange";

import DialogueBox from "../dialogue-box/DialogueBox";
import tombstone from "../../assets/images/tombstone.jpg";

import { IDialogueOption } from "../dialogue-box/IDialogueOption";
import { DeathSection } from "./Death.styled";

function Death() {
    const navigate = usePageChange();

    const handleRetry = () => {
        navigate("/", true);
    }

    const handleRest = () => {
        console.log("i love u");
    }

    const deathOptions: IDialogueOption[] = [{
        optionText: "Try again",
        optionHandler: handleRetry,
    }, {
        optionText: "Rest",
        optionHandler: handleRest,
    }]

    return (
        <main>
            <DeathSection>
                <div className="img-div">
                    <img src={tombstone} />
                </div>
                <DialogueBox text="Oops. Looks like you've died." options={deathOptions} />
            </DeathSection>
        </main>
    )
}

export default Death;