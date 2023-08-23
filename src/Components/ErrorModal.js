import React from "react";
import classes from "./ErrorModal.module.css";
import Card from "./UI/Card";
import Button from "./UI/Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClose} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
          <Button onClick={props.onClose}>X</Button>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClose}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
