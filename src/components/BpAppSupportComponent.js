import React from "react";
import Card from "react-bootstrap/Card";
import PopUp from "../PopUp";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

const BpAppSupportComponent = () => {
  const [alerts, setAlerts] = useState(null);

  // + adding the use
  useEffect(() => {
    let isMounted = true;
    getData();
    const interval = setInterval(() => {
      getData();
    }, 60000);

    async function getData() {
      const response = await fetch("http://localhost:8082/bigpanda/as?env=qa");
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
          <Card.Header>App Support</Card.Header>
          <Card.Body>
            <Card.Title>Unhandled Count</Card.Title>
            <Card.Text>{alerts.errorCount}</Card.Text>

            <PopUp title="Title" buttonTitle="Click">
              <div>
                {alerts.errorMap.map((e, index) => (
                  <div key={index} className="row mb-2">
                    <div className="col-2">problem URL: </div>
                    <a
                      href={e.problemUrl?? e.zabbixUrl}
                      rel="noreferrer"
                      target="_blank"
                      className="col-10"
                    >
                      {e.problemUrl?? e.zabbixUrl ?? ""}
                    </a>
                    <div className="col-2">details: </div>
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

export default BpAppSupportComponent;
