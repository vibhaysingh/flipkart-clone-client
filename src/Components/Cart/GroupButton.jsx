import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { CounterContext } from "../../context/CounterContex";
const useStyle = makeStyles({
  component: {
    marginTop: 30,
  },
  button: {
    borderRadius: "50%",
  },
});

const GroupedButton = () => {
  const classes = useStyle();
  const [counter, setCounter] = useState(1);
  const counterData = useContext(CounterContext);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
    counterData.increaseCounter();
  };

  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
    counterData.decreaseCounter();
  };
  // console.log(counterData);

  return (
    <ButtonGroup className={classes.component}>
      <Button
        className={classes.button}
        onClick={() => handleDecrement()}
        disabled={counter === 1}
      >
        -
      </Button>
      <Button disabled>{counter}</Button>
      <Button className={classes.button} onClick={() => handleIncrement()}>
        +
      </Button>
    </ButtonGroup>
  );
};

export default GroupedButton;
