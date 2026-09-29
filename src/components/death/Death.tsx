import { useNavigate } from "react-router-dom";
import tombstone from "../../images/tombstone.jpg";
import { DeathSection } from "./Death.styled";
import DialogueBox from "../dialogue-box/DialogueBox";
import { IDialogueOption } from "../dialogue-box/IDialogueOption";

function Death() {
    const navigate = useNavigate();

    const handleRetry = () => {
        navigate("/");
    }

    const deathOptions: IDialogueOption[] = [{
        optionText: "Try again?",
        optionHandler: handleRetry,
    }]

    return (
        <main>
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