import UserList from "../components/UserList";
import Header from "../components/Header";
import "../CSS/Home.css";
import EvenementCard from "../components/EvenementCard";
import ArticleCard from "../components/ArticlesCard";
import Footer from "../components/Footer";

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
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <div className="separator"></div>
        <EvenementCard />
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <div className="separator"></div>
        <ArticleCard />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
