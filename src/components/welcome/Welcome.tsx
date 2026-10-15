import { useState, useRef, useEffect } from "react";
import { usePageChange } from "../../hooks/usePageChange";

import {
  WelcomeSection,
  WelcomeOptions
} from "./Welcome.styled";

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
    const interval = setInterval(() => {
      counter();
    }, 1500);
    return () => clearInterval(interval);
  }, []);


  return (
    <main>
      <WelcomeSection className={`margin-${count}`}>
        <div className="box">
          <h1 className="blur">Welcome.</h1>
          <h3 className="blur">What would you like to do?</h3>
          <WelcomeOptions>
            <div>
              <span>
                <h3 className="blur" onClick={(() => navigate("entry", true))}>
                  Enter
                </h3>
              </span>
              <span>
                <h3 className="blur" onClick={() => navigate("death", true)}>
                  Exit
                </h3>
              </span>
            </div>
          </WelcomeOptions>
        </div>
      </WelcomeSection>
    </main>
  );
}

export default Welcome;
