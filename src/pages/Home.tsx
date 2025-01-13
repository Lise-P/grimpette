import { climbers } from "../components/Grimpeur";
import GrimpeurList from "../components/GrimpeurList";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <header>
        <div className="navEtLogo">
          <nav>
            <ul className="navBarre">
              <li>
                <Link to="/">Home&nbsp;•&nbsp;</Link>
              </li>
              <li>
                <Link to="/grimpeavecmoi"> Grimpe avec moi&nbsp;•&nbsp;</Link>
              </li>
              <li>
                <Link to="/evenements">Les événements&nbsp;•&nbsp;</Link>
              </li>
              <li>
                <Link to="/articles">Les articles&nbsp;•&nbsp;</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <img
            className="logoConnection"
            src="./images/icone_utilisateur.png"
            alt="icone_utilisateur"
          />
        </div>

        <div className="burger-menu">☰ Menu</div>
        <div className="banner">
          <img
            className="logoImg"
            src="./images/header_climbing.jpg"
            alt="logo"
          />
          <div>
            <h1 className="bannerTitle">Grimpette </h1>
            <br />
            <h2 className="bannerSubtitle">Grimpons ensemble !</h2>
          </div>
        </div>
      </header>
      <main>
        <h2>Découvrez votre futur·e partenaire de grimpe</h2>
        <input type="chercher" id="site-search" name="chercher_profil" />

        <button type="button">Search</button>
        <img src="./images/icone_loupe.png" alt="icone_loupe" />
        <button type="button" className="boutonFiltre">
          Filtre
          <img
            className="iconeFilter"
            src="./images/icone_filter.png"
            alt="icone_filter"
          />
        </button>
        <GrimpeurList grimpeurs={climbers} />
        <h2>Nos événements</h2>
        {/* futur incorporation de <Events events={events}>/ */}
        <figure className="event">
          <img
            className="imgMain"
            src="./images/cords_event1.jpg"
            alt="cords"
          />
          <h3>Disco Pogo à Mroc Part-Dieu</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            quisquam quidem praesentium, iure voluptatum hic dolorum nesciunt,
            voluptates molestiae maiores quis pariatur culpa provident,
            similique quod possimus soluta laboriosam nobis?
          </p>
        </figure>

        <figure className="event">
          <img
            className="imgMain"
            src="./images/magnesie_event2.jpg"
            alt="cords"
          />
          <h3>Disco Pogo à Climb-Up Confluence</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            quisquam quidem praesentium, iure voluptatum hic dolorum nesciunt,
            voluptates molestiae maiores quis pariatur culpa provident,
            similique quod possimus soluta laboriosam nobis?
          </p>
        </figure>

        <h2>Nos articles sur la grimpe</h2>

        <figure className="article">
          <img
            className="imgMain"
            src="./images/boldering_article1.jpg"
            alt="bolder"
          />
          <h3>Le bloc c'est vraiment mieux</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            quisquam quidem praesentium, iure voluptatum hic dolorum nesciunt,
            voluptates molestiae maiores quis pariatur culpa provident,
            similique quod possimus soluta laboriosam nobis?
          </p>
        </figure>

        <figure className="article">
          <img
            className="imgMain"
            src="./images/climbing_article2.jpg"
            alt="climbing"
          />
          <h3>Le bloc, vraiment, c'est mieux</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            quisquam quidem praesentium, iure voluptatum hic dolorum nesciunt,
            voluptates molestiae maiores quis pariatur culpa provident,
            similique quod possimus soluta laboriosam nobis?
          </p>
        </figure>
      </main>
      <footer>
        <p>coordonnées</p>
      </footer>
    </>
  );
}

export default Home;
