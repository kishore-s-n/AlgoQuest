import React from "react";
import "./Levels.css";

const Levels = () => {
  return (
    <div className="levels-container">
      <h2>Welcome, Rajesh R here your challenges.</h2>
      
      {/* Easy Card */}
      <div className="levels easy">
        <div className="levels-label">
          <span>EASY</span>
        </div>
        <div className="levels-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged.
          </p>
        </div>
      </div>

      {/* Medium Card */}
      <div className="levels medium">
        <div className="levels-label">
          <span>MEDIUM</span>
        </div>
        <div className="levels-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged.
          </p>
        </div>
      </div>

      {/* Hard Card */}
      <div className="levels hard">
        <div className="levels-label">
          <span>HARD</span>
        </div>
        <div className="levels-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Levels;
