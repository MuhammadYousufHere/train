import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../../components/Button/Button";
const Card = ({ text, action, title }) => {
  return (
    <div className="history-card-container">
      <div className="history-card-body">
        <div className="upper">
          <div className="icon">
            <FontAwesomeIcon icon={faRightLong} />
          </div>
          <div className="middle-text">
            <p>{text}</p>
          </div>
        </div>
        {(title || action) && (
          <div className="bottom">
            <Button title={title} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
