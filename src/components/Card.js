import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";

function Card({ title, where, description, bullets, importantNote }) {
  return (
    <div className="card">
      <h1>
        <em>{title}</em>
      </h1>
      <h3>{where}</h3>
      {importantNote && (
        <p
          style={{
            color: "var(--bg-primary)",
            padding: "5px",
            borderRadius: "5px",
            backgroundColor: "var(--highlight)",
            width: "100%",
            fontWeight: "bold",
          }}
        >
          {importantNote}
        </p>
      )}
      {description && <p>{description}</p>}
      {bullets &&
        bullets.map((bullet, index) => (
          <p key={`${title}_${index}`}>
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
