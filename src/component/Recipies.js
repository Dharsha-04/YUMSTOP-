import React, { useState } from 'react'
import './Recipies.css'
import Burgers from './Burgers';
import Snacks from './Snacks';
import Bevarage from './Bevarage';
import Desserts from './Desserts';
import Street from './Street';
import Mexican from './Mexican';
import Italian from './Italian';
import RecipesAdded from './Recipeadded';



const Recipies = () => {

  const [query, setQuery] = useState("");

  const scrollToSection = (id) => {
    if (!id) return;

    const section = document.getElementById(id);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


    

  return (
    <div>
     <div className="search-section">
      <div className="search-box">
        {/* Dropdown inside search box */}
        <select
          className="search-select"
          // value={category}
          onChange={(e) => scrollToSection(e.target.value)}
        >
          <option value="all">All</option>
          <option value="burgers">🍔 BURGERS & WRAPS</option>
          <option value="snacks">🍟 SNACKS & SIDES</option>
          <option value="italian"c>🍕 ITALIAN FAST FOOD</option>
          <option value="mexican">🌮 MEXICAN FAST FOOD</option>
          <option value="fried">🍗 KOREAN,CHINESE,JAPANESE & THAI FOOD</option>
          <option value="desserts">🍰 DESSERTS</option>
          <option value="bevrages">🥤 BEVERAGES</option>
          <option value="addedrecipes">📋 Added Recipes</option>
        </select>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search recipes, dishes, ingredients..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* Button */}
        <button className="search-btn">Search</button>
      </div>
    </div>

   <Burgers/>
   <Snacks/>
   <Italian/>
   <Mexican/>
   <Street/>
   <Desserts/>
   <Bevarage/>
   <RecipesAdded/>
   
   
   
   

    </div>
  )
}

export default Recipies