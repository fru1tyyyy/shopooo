import "../assets/styles/home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";

export default function Home(){
  useEffect(() => {
    document.title = "SHOPOO";
    import("../assets/scripts/slides.js");
    import("../assets/scripts/searchbar.js");
  }, []);
  return(
    <div>
      <header>
        <div className="header-container">
          <div className="logo">
            <a href="/game"><i className="fa-solid fa-bag-shopping"></i> SHOPOO</a></div>
          <div className="search-container">
            <input type="text" id="searchInput" placeholder="Search..." onKeyUp={() => {
                if (window.searchGames) window.searchGames();
                if (window.updateLastSearch) window.updateLastSearch();
              }}/>
          </div>
          <div className="header-icons">
            <span className="icon">
              <a href="/about"><i className="fa-solid fa-user"></i> About Us</a>
            </span>
            <span className="icon">
              <a href="/contact"><i className="fa-solid fa-phone"></i> Contact Us</a>
            </span>
            <span className="icon">
              <a href="/cart"><i className="fa-solid fa-cart-shopping"></i> Cart</a>
            </span>
            <span className="icon">
              <a href="/login" className="logout-link"><i className="fa-solid fa-right-from-bracket"></i> Logout</a>
            </span>
          </div>
        </div>
      </header>
      <nav className="navbar">
        <ul>
          <li><a href="/Home">GAMES</a></li>
          <li><a href="/Hardware">HARDWARE</a></li>
        </ul>
      </nav>
      <div className="main-banner">
        <div className="slideshow">
          <img src="/img/sales.jpg" alt="banner" className="slide" />
          <img src="/img/wukong40.jpg" alt="banner" className="slide" />
          <img src="/img/rtx500.webp" alt="banner" className="slide" />
        </div>
      </div>
      <section className="flash-deals">
        <div className="deals-container">
          <div className="deal-item">
            <a href="/games/black-myth-wukong"><img src="/img/wukong.jpg" alt="loading" /></a>
            <p><strong>Black Myth Wukong</strong></p>
            <p><small>RM 219</small></p>
          </div>
          <div className="deal-item">
            <a href="/games/elden-ring"><img src="/img/eldenring.webp" alt="loading" /></a>
            <p><strong>Elden Ring</strong></p>
            <p><small>RM 199</small></p>
          </div>
          <div className="deal-item">
            <a href="/games/spiderman-2"><img src="/img/spiderman2.avif" alt="loading" /></a>
            <p><strong>Marvel Spider-Man 2</strong></p>
            <p><small>RM 249</small></p>
          </div>
          <div className="deal-item">
            <a href="/games/spiderman"><img src="/img/spiderman.jpg" alt="loading" /></a>
            <p><strong>Marvel Spider-Man Remastered</strong></p>
            <p><small>RM 249</small></p>
          </div>
          <div className="deal-item">
            <a href="/games/star-wars-fallen-order"><img src="/img/fallenorder.webp" alt="loading" /></a>
            <p><strong>STAR WARS Jedi: Fallen Order</strong></p>
            <p><small>RM 159</small></p>
          </div>
          <div className="deal-item">
            <a href="/games/star-wars-jedi-survivor"><img src="/img/jedisurvivor.webp" alt="loading" /></a>
            <p><strong>STAR WARS Jedi: Survivor</strong></p>
            <p><small>RM 249</small></p>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; 2025 SHOPOO</p>
      </footer>
    </div>
  );
}
