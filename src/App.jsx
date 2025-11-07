import React from "react";
import { Card } from "./components/card/index.jsx";
import { cardsData } from "./data/cardsData.js";

export function App() {
  return (
    <main>
      <h1>Galeria de Cards</h1>

      <section className="cards-wrapper">
        {cardsData.map((card) => (
          <Card
            key={card.id} 
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </section>
    </main>
  );
}
