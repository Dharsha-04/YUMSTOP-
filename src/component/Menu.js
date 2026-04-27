import React, { useState } from "react";
import "./Menu.css";

function App() {

  const menuData = {
    
    Burgers: [
      { id: 1, name: "Classic American Cheeseburger", price: 600, rating: 5.0, img: "https://images.unsplash.com/photo-1678110707493-8d05425137ac?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 2, name: "Veggie Burger", price: 350, rating: 4.0, img: "https://plus.unsplash.com/premium_photo-1664648063566-404eabc07ea0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VmVnZ2llJTIwQnVyZ2VyfGVufDB8fDB8fHww" },
      { id: 3, name: "Chicken Burger", price: 450, rating: 4.5, img: "https://images.unsplash.com/photo-1615297928064-24977384d0da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D" },
      { id: 4, name: "Double Decker Burger", price: 800, rating: 5.0, img: "https://media.istockphoto.com/id/2239902185/photo/double-beef-burger-with-sauteed-mushrooms-and-rich-cheese-sauce-on-yellow-background-side-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=Twb3CHLjWKMGMF3G_M5gYeHPuRnMcpfqZFjQrmVMaQQ=" },
      { id: 5, name: "Mushroom Swiss Burger", price: 400, rating: 5.0, img: "https://tse1.mm.bing.net/th/id/OIP.IHeEIWDm3gEzv1aFR2lwUQHaHa?pid=Api&P=0&h=180" },
      { id: 6, name: "Aloo Tikki Burger", price: 300, rating: 4.0, img: "https://plus.unsplash.com/premium_photo-1664392112262-271039647be9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWxvbyUyMFRpa2tpJTIwQnVyZ2VyfGVufDB8fDB8fHww" },
      { id: 7, name: "Korean Bulgogi Burger", price: 450, rating: 5.0, img: "https://images.unsplash.com/photo-1690650262031-b01b6e172374?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEtvcmVhbiUyMEJ1bGdvZ2klMjBCdXJnZXJ8ZW58MHx8MHx8fDA%3D" },
      { id: 8, name: "Teriyaki Burger", price: 499, rating: 4.0, img: "https://media.istockphoto.com/id/1043829398/photo/hawaiian-teriyaki-pineapple-and-bacon-burger-with-fries.webp?a=1&b=1&s=612x612&w=0&k=20&c=jvhVRb5WNPHXzdElKvuUkWXIPwQF4m64dh5Wg0lwbPg=" },
      { id: 9, name: "Fish Burger", price: 345, rating: 4.5, img: "https://plus.unsplash.com/premium_photo-1664392182760-b1e2da62b7f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlzaCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D" },
      { id: 10, name: "BBQ Bacon Burger", price: 490, rating: 4.5, img: "https://media.istockphoto.com/id/1461424566/photo/freshly-flame-grilled-bacon-burger-in-gourmet-restaurant.webp?a=1&b=1&s=612x612&w=0&k=20&c=tXthqUIrHwWCJAWnxuRvp3ID8S2X8nZYQ7OGc4VnT4U=" }

    ],
    Wraps: [
        { id: 11, name: "Chicken Shawarma Wrap", price: 250,rating: 5.0, img: "https://images.unsplash.com/photo-1621334954920-9fc5f5490401?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hpY2tlbiUyMFNoYXdhcm1hJTIwV3JhcHxlbnwwfHwwfHx8MA%3D%3D"},
        { id: 12, name: "Paneer Tikka Wrap", price: 379,rating: 5.0, img: "https://media.istockphoto.com/id/1412717730/photo/paneer-tikka-shawarma-wrap-served-in-a-cutting-board-on-grey-background-side-view-of-fastfood.webp?a=1&b=1&s=612x612&w=0&k=20&c=yIafzARBhahg_1CpHHQNTtomcuIuzEQMXCo7CahE5NI="},
        { id: 13, name: "Mexican Burrito Wrap", price: 329,rating: 5.0, img: "https://tse2.mm.bing.net/th/id/OIP.bJxYuQVF62SKYc_LCBG8PQHaFW?pid=Api&P=0&h=180"},
        { id: 14, name: "Tortilla Egg Wrap", price: 249,rating: 5.0, img: "https://plus.unsplash.com/premium_photo-1663855531676-b2d444eabcf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VG9ydGlsbGElMjBFZ2clMjBXcmFwfGVufDB8fDB8fHww"},
        { id: 15, name: "Greek Gyro Wrap", price: 399,rating: 5.0, img: "https://tse4.mm.bing.net/th/id/OIP.mKTsDifqkJO0jl-F3CUk6wHaHa?pid=Api&P=0&h=180"},
        { id: 16, name: "Tuna Wrap", price: 250,rating: 5.0, img: "https://media.istockphoto.com/id/168517870/photo/tuna-salad-wrap-sandwich.webp?a=1&b=1&s=612x612&w=0&k=20&c=n6eAKab5ssDJ8UgBm92FsWMO8Rl8bbWw-R3cg3MEEkY="}
    ],
    Desserts: [
        { id: 17, name: "Brownies", price: 300, rating: 5.0, img: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { id: 18, name: "Chocolate Cake", price: 250, rating: 4.0, img: "https://images.unsplash.com/photo-1700448293876-07dca826c161?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENob2NvbGF0ZSUyMENha2V8ZW58MHx8MHx8fDA%3D"},
        { id: 19, name: "Cheesecake", price: 400, rating: 4.0, img: "https://images.unsplash.com/photo-1702925614886-50ad13c88d3f?q=80&w=789&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { id: 20, name: "Pudding", price: 250, rating: 4.5, img: "https://images.unsplash.com/photo-1734671223988-20df071ab200?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UHVkZGluZ3xlbnwwfHwwfHx8MA%3D%3D"},
        { id: 21, name: "Tiramisu", price: 450, rating: 4.7, img: "https://tse4.mm.bing.net/th/id/OIP.kQV8imVcXhhSRKQGIuuFMgHaEY?pid=Api&P=0&h=180"},
        { id: 22, name: "Ice Cream Sundae", price: 350, rating: 5.0, img: "https://tse4.mm.bing.net/th/id/OIP.FLQruoXPFFr1awOJg-4ykwHaFj?pid=Api&P=0&h=180"},
        { id: 23, name: "Vanilla Milkshake", price: 150, rating: 5.0, img: "https://plus.unsplash.com/premium_photo-1695868328902-b8a3b093da74?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { id: 24, name: "Panna Cotta", price: 350, rating: 4.9, img: "https://plus.unsplash.com/premium_photo-1713551474564-c3916a5eb3bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGFubmElMjBDb3R0YXxlbnwwfHwwfHx8MA%3D%3D"},
        { id: 25, name: "Chocolate Milkshake", price: 250, rating: 5.0, img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWlsa3NoYWtlfGVufDB8fDB8fHww"},
        { id: 26, name: "Strawberry Milkshake", price: 280, rating: 5.0, img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3RyYXdiZXJyeSUyME1pbGtzaGFrZXxlbnwwfHwwfHx8MA%3D%3D"},
        { id: 27, name: "Mango Milkshake", price: 300, rating: 5.0, img: "https://media.istockphoto.com/id/953707250/photo/mango-lassi-or-smoothie-in-big-glass-with-mint-leaf-side-angle-isolated-over-colourful.webp?a=1&b=1&s=612x612&w=0&k=20&c=n6Un20L-O_NJiwAX0Cy9wKoRIEcrcvs7PTNtLqyvmWo="},
        { id: 28, name: "Berry Chantilly Cake", price: 450, rating: 5.0, img: "https://simplyhomecooked.com/wp-content/uploads/2017/05/Berry-chantilly-cake-22.jpg"},
        { id: 29, name: "Oreo Crush Icecream", price: 300, rating: 4.8, img: "https://www.daringgourmet.com/wp-content/uploads/2023/07/Cookies-and-Cream-Ice-Cream-Recipe-3.jpg"},
        { id: 30, name: "Raspberry Ripple Icecream", price: 320, rating: 5.0, img: "https://media.istockphoto.com/id/584853686/photo/close-up-of-delicious-dessert-raspberry-pink-ice-cream-scoops.webp?a=1&b=1&s=612x612&w=0&k=20&c=SqDaOcCd2SVbYf2BIdxUSSQi6ZL1VkiL1wOc4g9xjC4="},
    ],
    Soup: [
        { id: 31, name: "Chicken Clear Soup", price: 309, rating: 5.0, img: "https://i.ytimg.com/vi/JmYjlTP2Am4/maxresdefault.jpg"},
        { id: 32, name: "Broccoli Cheddar Soup", price: 360, rating: 4.0, img: "https://media.istockphoto.com/id/1221405125/photo/creamy-broccoli-and-cheddar-soup-with-crusty-bread.webp?a=1&b=1&s=612x612&w=0&k=20&c=_GXVXeEcFMTUqIde-LahJvar1Bm6qTCnnUjD2EBYX3I="},
        { id: 33, name: "Tom Kha Soup", price: 380, rating: 4.9, img: "https://sweetnestle.com/wp-content/uploads/2025/06/0-3-640-N-6.jpg"},
        { id: 34, name: "Mixed Vegetable Soup", price: 299, rating: 4.7, img: "https://media.istockphoto.com/id/1394918995/photo/mixed-vegetable-soup.webp?a=1&b=1&s=612x612&w=0&k=20&c=OrMcZ0IbcgJ2KoSkSjvSuQxYk9hsZ4ecWYRfJLjjFBc="},
        { id: 35, name: "Seafood Soup", price: 339, rating: 4.5, img: "https://soupchick.s3.amazonaws.com/wp-content/uploads/2024/04/07135302/SOUP0163_7.png"},
        { id: 36, name: "Italian Zuppa Toscana", price: 559, rating: 4.8, img: "https://87recipes.com/wp-content/uploads/2024/03/Toscana-Soup.png"},
        { id: 37, name: "Avocado Soup", price: 420, rating: 5.0, img: "https://kirbiecravings.com/wp-content/uploads/2018/08/avocado-cream-soup-4-700x737.jpg"},

    ],
    "French Fries": [
      { id: 4, name: "Salted Fries", price: 189, rating: 4.3, img: "https://images.unsplash.com/photo-1733907502022-3ec7de6dc86e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2FsdGVkJTIwRnJpZXN8ZW58MHx8MHx8fDA%3D" },
      { id: 5, name: "Cheese Fries", price: 239, rating: 4.6, img: "https://plus.unsplash.com/premium_photo-1672498329467-b27e2a97d29b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ]
  };

  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState("French Fries");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [orderPopup, setOrderPopup] = useState(false);

  const addToCart = (item) => {
    const existing = cart.find(i => i.id === item.id);

    if (existing) {
      setCart(cart.map(i =>
        i.id === item.id ? { ...i, qty: i.qty + 1 } : i
      ));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const increase = (id) => {
    setCart(cart.map(i =>
      i.id === id ? { ...i, qty: i.qty + 1 } : i
    ));
  };

  const decrease = (id) => {
    setCart(cart.map(i =>
      i.id === id && i.qty > 1
        ? { ...i, qty: i.qty - 1 }
        : i
    ));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const placeOrder = () => {
    setShowCart(false);
    setOrderPopup(true);
    setCart([]);
  };

  return (
    <div className="container">

      <h1>Menu</h1>

      <div className="categories">
        {categories.map(cat => (
          <span
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="items">
        {menuData[activeCategory].map(item => (
          <div className="item-card" key={item.id}>
            <img src={item.img} alt="" />
            <div className="info">
              <h3>{item.name}</h3>
              <p>⭐ {item.rating}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
            <div className="price">₹{item.price}</div>
          </div>
        ))}
      </div>

      {/* Floating Cart Button */}
      {totalItems > 0 && (
        <div className="cart-float" onClick={() => setShowCart(true)}>
          🛒 {totalItems}
        </div>
      )}

      {/* Slide Up Cart Modal */}
      {showCart && (
        <div className="cart-modal">
          <h2>Your Cart</h2>

          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <div className="qty-controls">
                <button onClick={() => decrease(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increase(item.id)}>+</button>
              </div>
              <span>₹{(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}

          <h3>Total: ₹{total.toFixed(2)}</h3>

          <div className="cart-actions">
  <button className="close-btn" onClick={() => setShowCart(false)}>
    Close
  </button>

  <button className="order-btn" onClick={placeOrder}>
    Order Now
  </button>
</div>
        </div>
      )}

      {/* Order Popup */}
      {orderPopup && (
        <div className="popup">
          <h2>🎉 Order Placed Successfully!</h2>
          <button onClick={() => setOrderPopup(false)}>OK</button>
        </div>
      )}

    </div>
  );
}

export default App;