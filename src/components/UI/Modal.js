import { Fragment } from "react";
import ReactDOM from 'react-dom'    

import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const ModalOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElements = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>, portalElements)}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElements
      )}
    </Fragment>
  );
};

export default Modal;
