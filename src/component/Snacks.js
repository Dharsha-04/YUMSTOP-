import React, { useState } from "react";
import snacksData from "../data/snacks.json";
import "./italian.css";

const Italian = () => {
  const [openItem, setOpenItem] = useState(null);

  return (
    <>
      {/* PAGE CONTENT */}
      <section id="snacks" className={`category-section ${openItem ? "page-blur" : ""}`}>
        <h2>Snacks and Sides</h2>
        <p>Crispy snacks and sides</p>

        <div className="recipes-container">
          <div className="recipes-grid">
            {snacksData.map((item) => (
              <div className="recipe-card" key={item.id}>
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button onClick={() => setOpenItem(item)}>
                  Show Recipe
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {openItem && (
        <div className="modal-overlay" onClick={() => setOpenItem(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setOpenItem(null)}>
              ×
            </span>

            <div className="modal-content">
              {/* LEFT */}
              <div className="modal-left">
                <img src={openItem.img} alt={openItem.title} />
                <h2>{openItem.title}</h2>
              </div>

              {/* RIGHT */}
              <div className="modal-right">
                <h3>Ingredients</h3>
                <p>{openItem.ingredients}</p>

                <h3>Recipe</h3>
                <p>{openItem.recipe}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Italian;
