import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./ErrorModal.module.css";
import Card from "./UI/Card";
import Button from "./UI/Button";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClose={props.onClose}
        />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
