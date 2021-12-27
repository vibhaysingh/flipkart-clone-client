import { createContext, useState } from "react";

export const CounterContext = createContext();

const CounterState = (props) => {
  const [counter, setcounter] = useState(1);

  const increaseCounter = () => {
    setcounter(counter + 1);
  };
  const decreaseCounter = () => {
    if (counter >= 2) setcounter(counter - 1);
    else setcounter(1);
  };

  return (
    <CounterContext.Provider
      value={{ counter, increaseCounter, decreaseCounter }}
    >
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterState;
