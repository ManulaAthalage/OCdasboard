import React from "react";
import { useLocation } from "react-router-dom";
import { routings } from "../Routes";
import { Navbar, Nav, } from "react-bootstrap";

const NavigationBar = () => {
  const location = useLocation();

  return (
    <Navbar className="p-0 pt-1" collapseOnSelect expand="sm" bg="dark" variant="dark" >
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto" >
            {routings.map((e, index) =>
              e.showInNav ? <Nav.Link className={"pt-3 pb-3 "+(location.pathname === e.path ? "text-light" : "")} key={index} href={e.path}>{e.name}</Nav.Link> : null
            )}
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>

    // <div className="topnav">

    // {routings.map((e, index) =>
    //   e.showInNav ? (
    //     <div
    //       key={index}
    //       className={location.pathname === e.path ? "active" : ""}

    //     >
    //       <Link to={e.path} className="link">
    //         {e.name}
    //       </Link>
    //     </div>
    //   ) : null
    // )}
    // </div>
  );
};

export default NavigationBar;
