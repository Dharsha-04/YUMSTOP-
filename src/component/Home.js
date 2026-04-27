import React, {Component} from 'react'
// import {} from 'semantic-ui-react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Home.css"

import imgLarge from "../assets/images/OIP.jpg";
// import imgSmall1 from "../assets/images/mac.jpg";
// import imgSmall2 from "../assets/images/pasta.jpg";

const Home = () => {
     const navigate = useNavigate();

  const goToRecipes = () => {
    navigate("/recipes");
  };
  const goToMenu = () => {
  navigate("/menu");
};

  return (
    <div>


    <section className='hero'>
    <div className='hero-content'>
      <h1>Welcome to <span>YUMSTOP</span></h1>
      <p>Discover quick, easy, and tasty fast food recipes to delight your family and friends and the best restaurants near you and get your food delivered hot & fresh to your doorstep.</p>
      <p>Happiness Served Hot,Where Every Bite Smiles</p>
      <div className='hero-buttons'>
        <button class="btn-primary" onClick={goToMenu}>Order Now</button>
        <button class="btn-primary" onClick={goToRecipes}>Explore Recipes</button>
        
      </div>
    </div>
  </section>

  <section className='about'>
    <h2>About YUMSTOP</h2>
    <p>At <strong>YUMSTOP</strong>, we believe every meal can be a celebration. Our goal is to empower home cooks to create fast food favorites easily and affordably. Whether you are a beginner or an experienced cook, our recipes make cooking enjoyable and stress-free.</p>
    <ul>
      <li>🥪 Simple & Easy Recipes</li>
      <li>🍳 Step-by-Step Instructions</li>
      <li>🕒 Quick Meals in Under 30 Minutes</li>
      <li>👩‍🍳 Tips for Perfect Results</li>
    </ul>
  </section>

  <section className='section light'>
    <h2 className="who-title">Who Is YUMSTOP For?</h2>
    <ul className='list'>
      <li>Housewives who love cooking</li>
      <li>Beginners learning fast food recipes</li>
      <li>Mothers preparing snacks for kids</li>
      <li>Anyone who enjoys homemade food</li>
    </ul>
  </section>

  {/* Featured Recipe Section */}
<section className="recipe">
  <div className="content">
    <h2>Ultimate Creamy Mac and Cheese</h2>
    <p className="desc">
      Cheesy, comforting, and satisfying—this mac and cheese recipe brings
      nostalgic flavor with every bite.
    </p>

    <ul className="points">
      <li>🧀 Rich, gooey cheese in every bite</li>
      <li>🍲 Comfort food made effortlessly delicious</li>
      <li>👨‍👩‍👧 Perfect for family or solo cravings</li>
    </ul>

    <button className="btn-primary" onClick={goToRecipes}>See Recipes →</button>
  </div>

  <div className="images">
    <img src={imgLarge} alt="Mac and Cheese" className="img-large" />
    {/* <img src={imgSmall1} alt="Mac and Cheese" className="img-small top" />
    <img src={imgSmall2} alt="Mac and Cheese" className="img-small bottom" /> */}
  </div>
</section>


  <section className='categories'>
    <h2 className='h2' >Popular Recipe Categories</h2>
    <div className='category-cards'>
      <div className='category-card'>🍔<h3>Burgers & Sandwiches</h3></div>
      <div className='category-card'>🍕<h3>Pizza & Flatbreads</h3></div>
      <div className='category-card'>🍟<h3>Snacks & Fries</h3></div>
      <div className='category-card'>🍰<h3>Desserts & Sweet Treats</h3></div>
      <div className='category-card'>🥤<h3>Beverages & Smoothies</h3></div>
    </div>
  </section>

  <section className='cta'>
    <h2>Ready to Cook Something Delicious?</h2>
    <p>Start exploring our fast food recipes and turn your kitchen into a mini diner!</p>
    <button className='btn-primary' onClick={goToRecipes}>Explore Recipes</button>
  </section>

  <footer>
    © 2026 <strong>YUMSTOP</strong> | One Stop for Every Yum!<br/>
    Follow us on: Facebook | Instagram | Pinterest | YouTube
  </footer>

    </div>
  )
}

export default Home