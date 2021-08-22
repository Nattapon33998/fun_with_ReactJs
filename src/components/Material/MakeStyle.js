import React from "react";

import className from "classnames";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  buttonText: {
    color: "red",
  },
  buttonBackground: {
    backgroundColor: "blue",
  },
});

const propStyles = makeStyles({
  buttonText: {
    color: (props) => (props.red ? "red" : "blue"),
  },
  buttonStyles: (props) => {
    return {
      color: props.red ? "red" : "blue",
      backgroundColor: props.blue ? "blue" : "red",
    };
  },
});

const MakeStyle = (props) => {
  const classes = useStyles();
  const secoundClasses = propStyles(props);

  return (
    <div>
      <Button
        className={className(classes.buttonText, classes.buttonBackground)}
      >
        Click
      </Button>

      <Button className={secoundClasses.buttonText}>
        Single Style by props
      </Button>
      <Button className={secoundClasses.buttonStyles}>
        Multiple Style by props
      </Button>
    </div>
  );
};

export default MakeStyle;
