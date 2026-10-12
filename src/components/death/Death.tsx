import { useNavigate } from "react-router-dom";
import tombstone from "../../assets/images/tombstone.jpg";
import { DeathSection } from "./Death.styled";
import DialogueBox from "../dialogue-box/DialogueBox";
import { IDialogueOption } from "../dialogue-box/IDialogueOption";
import { useMouseTrail } from "../../hooks/useMouseTrail";

function Death() {
    const navigate = useNavigate();
    const mouseTrail = useMouseTrail();

    const handleRetry = () => {
        navigate("/");
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