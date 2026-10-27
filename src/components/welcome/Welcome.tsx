import { useState, useRef, useEffect } from "react";
import { usePageChange } from "../../hooks/usePageChange";

import { WelcomeSection } from "./Welcome.styled";
import { DialogueStyled } from "../main/Main.styled";

import { FADE_OUT } from "../../constants";
import border from "../../assets/images/border.svg";
import Space from "../space/Space";

function Welcome() {
  const navigate = usePageChange();
  const [count, setCount] = useState(1);
  const [activateSpace, setActivateSpace] = useState<Boolean>(false);
  const increaseRef = useRef(true);

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
    Array.from(document.getElementsByClassName("blur"))
      .forEach((element) => {
        const text: string = element.textContent || "";
        element.setAttribute("text-content", text);
      });

    const interval = setInterval(() => {
      counter();
    }, FADE_OUT);
    return () => clearInterval(interval);
  }, []);

  const goToSpace = () => {
    const welcomeSection = document.getElementById("welcome-box");
    if (welcomeSection) {
      welcomeSection.style.opacity = "0";
    }
    setActivateSpace(true);
  }

  return (
    <main>
      <WelcomeSection className={`margin-${count}`}>
        <div id="welcome-box">
          <span id="border-decor">
            <img id="decor-top" src={border} />
            <img id="decor-right" src={border} />
            <img id="decor-bottom" src={border} />
            <img id="decor-left" src={border} />
          </span>
          <h1 className="blur">Welcome.</h1>
          <h3 className="blur">What would you like to do?</h3>
          <DialogueStyled>
            <div>
              <button onClick={(() => goToSpace())}>
                <h3 className="blur">
                  Enter
                </h3>
              </button>
              <button onClick={() => navigate("death", true)}>
                <h3 className="blur">
                  Exit
                </h3>
              </button>
            </div>
          </DialogueStyled>
        </div>
      </WelcomeSection>
      <Space active={activateSpace} />
    </main>
  );
}

export default Welcome;
