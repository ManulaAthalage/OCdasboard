import React, { useState } from "react";
//import ReactDOM from 'react-dom';
import {  Modal , Button } from "react-bootstrap";
//import {Modal }from "react-responsive-modal";
//import { SafeAreaProvider } from 'react-native-safe-area-context';

function PopUp(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
   
  <>
     
      <Button variant="primary" onClick={handleShow}>
        {props.buttonTitle}
      </Button>
     
      <Modal show={show} onHide={handleClose} animation={false} size="xl"> 
     
        <Modal.Header>
        
          <Modal.Title>{props.Title}</Modal.Title>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Header>
        
        <Modal.Body className="overflow-auto" style={{maxHeight:'400px'}}>{props.children}</Modal.Body>
        
      </Modal>
      
    </>
  );
}

export default PopUp;
