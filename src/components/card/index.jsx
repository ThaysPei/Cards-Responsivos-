import "./style.css";
import React from "react";


//template reutilizável para desenvolvimento e manutenção dos cards

export function Card({ title, description, image }) {
  return (
    <article className="card-container" aria-label={title}>
      <img src={image} alt={title} className="card-image" />

      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
    </article>
  );
}
