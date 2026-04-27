import React, { useState } from "react";
import beveragesData from "../data/beveragesData.json";
import "./italian.css";

const Italian = () => {
  const [openItem, setOpenItem] = useState(null);

  return (
    <>
      {/* PAGE CONTENT */}
      <section id="bevrages" className={`category-section ${openItem ? "page-blur" : ""}`}>
        <h2>Beverages</h2>
        <p>Cool drinks and beverages</p>

        <div className="recipes-container">
          <div className="recipes-grid">
            {beveragesData.map((item) => (
              <div className="recipe-card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
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
                <img src={openItem.image} alt={openItem.name} />
                <h2>{openItem.name}</h2>
              </div>

              {/* RIGHT */}
              <div className="modal-right">
                <h3>Ingredients</h3>
                <p>{openItem.incredients}</p>

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
