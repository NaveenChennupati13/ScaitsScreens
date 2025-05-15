import React, { useState } from "react";
import NavSidebar from "./side-top-nav-bars";
import { Link } from "react-router-dom";
import Campus from "./Campus";
import "../styling/Campus.css";

function BodySec() {
  const [activeFilter, setActiveFilter] = useState("");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <NavSidebar />
      <div className="body-sec-container">
        <div className="students-section-container">
          <div className="students-section-left mobile-background">
            <h1 className="students-section-title">Students Masters</h1>
            <p className="students-section-description">
              Access and manage comprehensive student details seamlessly.
              
              View personalized profiles tailored to your campus.
            </p>
            <div className="students-search-bar">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search for the module" />
            </div>
          </div>
          <div className="students-section-right">
            <div className="students-filters">
              <div>
                <button className="students-pill" onClick={() => handleFilterClick("State")}>
                  <i className="fas fa-globe"></i> State
                </button>
                <button className="students-pill" onClick={() => handleFilterClick("City")}>
                  <i className="fas fa-city"></i> City
                </button>
                <Link to="Campus">
                  <button className="students-pill">
                    <i className="fas fa-school"></i> Campus
                  </button>
                </Link>
              </div>
              <div>
                <button className="students-pill">
                  <i className="fas fa-calendar-alt"></i> Fee Payment Year
                </button>
                <button className="students-pill">
                  <i className="fas fa-money-bill"></i> Fee Heads
                </button>
              </div>
              <div>
                <button className="students-pill">
                  <i className="fas fa-building"></i> Organization
                </button>
                <button className="students-pill">
                  <i className="fas fa-id-card"></i> Card Type
                </button>
                <button className="students-pill">
                  <i className="fas fa-stream"></i> Stream
                </button>
              </div>
              <div>
                <button className="students-pill">
                  <i className="fas fa-book"></i> Program Name
                </button>
                <button className="students-pill">
                  <i className="fas fa-file-alt"></i> Exam Program
                </button>
              </div>
              <div>
                <button className="students-pill">
                  <i className="fas fa-route"></i> Course Track
                </button>
              </div>
            </div>
          </div>
        </div>
        {activeFilter === "Campus" && <Campus />}
      </div>
    </>
  );
}

export default BodySec;