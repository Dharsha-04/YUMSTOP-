import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Recipesadded.css";

const RecipesAdded = () => {

    const [openItem, setOpenItem] = useState(null);

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("https://69295cd59d311cddf349323b.mockapi.io/user")
      .then((res) => setRecipes(res.data));
  }, []);

  return (
    <>
    <section id="addedrecipes" className={`category-section ${openItem ? "page-blur" : ""}`}>
        <h2>New Recipes</h2>
        <p>Your creations, saved with flavor</p>

        <div className="recipes-container">
          <div className="recipes-grid">
            {recipes.map((item) => (
              <div className="recipe-card" key={item.id}>
                <img src={item.first} alt={item.second} />
                <h3>{item.second}</h3>
                <p>{item.third}</p>
                <button onClick={() => setOpenItem(item)}>
                  Show Recipe
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {openItem && (
        <div className="modal-overlay" onClick={() => setOpenItem(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setOpenItem(null)}>
              ×
            </span>

            <div className="modal-content">
              {/* LEFT */}
              <div className="modal-left">
                <img src={openItem.first} alt={openItem.second} />
                <h2>{openItem.second}</h2>
              </div>

              {/* RIGHT */}
              <div className="modal-right">
                <h3>Ingredients</h3>
                <p>{openItem.fourth}</p>

                <h3>Recipe</h3>
                <p>{openItem.fifth}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipesAdded;
