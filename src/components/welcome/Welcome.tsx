import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  WelcomeSection,
  WelcomeOptions
} from "./Welcome.styled";

function Welcome() {
  const navigate = useNavigate();
  const [continueText, setContinueText] = useState("Walk forward");
  const [exitText, setExitText] = useState("Turn away");
  const [count, setCount] = useState(1);
  const increaseRef = useRef(true);

  let addInterval: any = null;
  let removeInterval: any = null;

  const counter = () => {
    setCount(currentCount => {
      if (currentCount === 5) {
        increaseRef.current = false;
      } else if (currentCount === 1) {
        increaseRef.current = true;
      }

      return currentCount + (increaseRef.current ? 1 : -1);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      counter();
    }, 1500);
    return () => clearInterval(interval);
  }, []);


  const onHover = (option: "continue" | "leave", text: string) => {
    let currState: number = text.includes(".") ? text.split(".")[1].length + 1 : 0;

    addInterval = setInterval(() => {
      if (currState < 3) {
        if (option === "continue")
          setContinueText(continueText => continueText + ".");

        if (option === "leave")
          setExitText(exitText => exitText + ".");

        currState++;
      } else {
        clearInterval(addInterval);
      }
    }, 800);
  }

  const onLeave = (option: "continue" | "leave", text: string) => {
    clearInterval(addInterval);
    let currState: number = text.includes(".") ? text.split(".")[1].length + 2 : 0;

    removeInterval = setInterval(() => {
      if (currState >= 0) {
        if (option === "continue")
          setContinueText(continueText => continueText.replace(".", ""));

        if (option === "leave")
          setExitText(exitText => exitText.replace(".", ""));

        currState--;
      } else {
        clearInterval(removeInterval);
      }
    }, 800);
  }


  return (
    <main>
      <WelcomeSection className={`margin-${count}`}>
        <div className="box">
          <h1 className="blur">Welcome.</h1>
          <h3 className="blur">What would you like to do?</h3>
          <WelcomeOptions>
            <div>
              <h3
                className="blur"
                onMouseEnter={() => onHover("continue", continueText)}
                onMouseLeave={() => onLeave("continue", continueText)}
                onClick={(() => navigate("entry"))}
              >{continueText}</h3>
              <h3
                className="blur"
                onMouseEnter={() => onHover("leave", exitText)}
                onMouseLeave={() => onLeave("leave", exitText)}
                onClick={() => navigate("death")}
              >{exitText}</h3>
            </div>
          </WelcomeOptions>
        </div>
      </WelcomeSection>
    </main>
  );
}

export default Welcome;
