import { useMouseTrail } from "../../hooks/useMouseTrail";
import { usePageChange } from "../../hooks/usePageChange";

import DialogueBox from "../dialogue-box/DialogueBox";
import tombstone from "../../assets/images/tombstone.jpg";

import { IDialogueOption } from "../dialogue-box/IDialogueOption";
import { DeathSection } from "./Death.styled";

function Death() {
    const navigate = usePageChange();
    const mouseTrail = useMouseTrail();

    const handleRetry = () => {
        navigate("/", true);
    }

    const deathOptions: IDialogueOption[] = [{
        optionText: "Try again?",
        optionHandler: handleRetry,
    }]

    return (
        <main>
            {mouseTrail(tombstone)}
            <DeathSection>
                <div className="img-div">
                    <img src={tombstone} />
                </div>
                <DialogueBox text="You died." options={deathOptions} />
            </DeathSection>
        </main>
    )
}

export default Death;