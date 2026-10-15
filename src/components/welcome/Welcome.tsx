import { useState, useRef, useEffect } from "react";
import { usePageChange } from "../../hooks/usePageChange";

import { WelcomeSection } from "./Welcome.styled";
import { DialogueStyled } from "../main/Main.styled";

import border from "../../assets/images/border.svg";

function Welcome() {
  const navigate = usePageChange();
  const [count, setCount] = useState(1);
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
    }, 1500);
    return () => clearInterval(interval);
  }, []);


  return (
    <main>
      <WelcomeSection className={`margin-${count}`}>
        <div className="box">
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
              <span>
                <h3 className="blur" onClick={(() => navigate("orbit", true))}>
                  Enter
                </h3>
              </span>
              <span>
                <h3 className="blur" onClick={() => navigate("death", true)}>
                  Exit
                </h3>
              </span>
            </div>
          </DialogueStyled>
        </div>
      </WelcomeSection>
    </main>
  );
}

export default Welcome;
