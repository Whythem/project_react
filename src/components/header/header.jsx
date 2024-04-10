import "./header.scss";
import logo from "../../assets/Logo.png";

function Header() {
  return (
    <>
      <nav className="desktop-nav">
        <div className="menu">
          <img src={logo} alt="logo" width="70" />
          <ul>
            <li><a href="">Accueil</a></li>
            <li><a href="">Search</a></li>
            <li><a href="">Follow</a></li>
          </ul>
        </div>
      
        <h1>MANGA DEMON</h1>

        <button>Login</button>
      </nav>
      <nav className="nav-list-mobile" id="mobileNav">
        <a href="index.html"><i className="fas fa-film"></i></a>
        <div id="barr">
          <div className="tt">
            <div id="top-nav" className="bar"></div>
            <div id="middle-nav" className="bar"></div>
            <div id="bottom-nav" className="bar"></div>
          </div>
        </div>
        <div className="mobile-nav-content" id="menu-nav">
          <ul>
            <li><a href="#">Films</a></li>
            <li><a href="#">Séries</a></li>
            <li><a href="#">Populaires</a></li>
          </ul>
        </div>
      </nav>    
    </>
  )
}

export default Header;