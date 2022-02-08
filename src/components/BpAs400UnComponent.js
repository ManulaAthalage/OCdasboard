import React from "react";
import Card from "react-bootstrap/Card";
import PopUp from "../PopUp";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

const BpAs400UnComponent = () => {
  const [alerts, setAlerts] = useState(null);

  // + adding the use
  useEffect(() => {
    let isMounted = true;
    getData();
    const interval = setInterval(() => {
      getData();
    }, 60000);

    async function getData() {
      const response = await fetch(
        "http://localhost:8082/bigpanda/as400?env=qa"
      );
      const data = await response.json();

      console.log(data);

      // store the data

      if (isMounted) setAlerts(data);
    }

    return () => {
      clearInterval(interval);
      isMounted = false;
    };
  }, []);
  return (
    <div className="col-md-6 col-lg-3 p-1">
      {alerts ? (
        <Card border="danger">
          <Card.Header>AS400</Card.Header>
          <Card.Body>
            <Card.Title>Unhandled Count</Card.Title>
            <Card.Text>{alerts.errorCount}</Card.Text>

            <PopUp title="Title" buttonTitle="Click">
              <div>
                {alerts.errorMap.map((e, index) => (
                  <div key={index} className="row mb-2">

                    <div className="col-1">Subject:</div>
                    <div className="col-10">{e.details}</div>
                  </div>
                ))}
              </div>
            </PopUp>
          </Card.Body>
        </Card>
      ) : (
        <Spinner animation="border" variant="dark">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default BpAs400UnComponent;
