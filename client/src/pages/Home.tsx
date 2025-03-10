import UserList from "../components/UserList";
import Header from "../components/Header";
import "../CSS/Home.css";

function Home() {
  return (
    <>
      <Header />

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
        <UserList />
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
