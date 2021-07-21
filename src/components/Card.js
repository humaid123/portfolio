import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";

function Card({ title, where, description, bullets }) {
  return (
    <div className="card">
      <h1>
        <em>{title}</em>
      </h1>
      <h3>{where}</h3>
      {description && <p>{description}</p>}
      {bullets.map((bullet, index) => (
        <p key={index}>
          <FaChevronCircleRight
            style={{
              fontSize: "0.8rem",
              color: "var(--highlight)",
              marginRight: "0.5rem",
            }}
          />
          {bullet}
        </p>
      ))}
    </div>
  );
}

export default Card;
