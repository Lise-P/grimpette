import "../CSS/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>À propos de nous</h3>
          <p>
            Nous sommes passionnés par la grimpe et nous voulons connecter les
            grimpeurs autour d'événements et de rencontres. Rejoignez notre
            communauté et grimpez avec des partenaires !
          </p>
        </div>

        <div className="footer-column">
          <h3>Liens utiles</h3>
          <ul>
            <li>
              <a href="/about">À propos</a>
            </li>
            <li>
              <a href="/events">Nos événements</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/privacy">Politique de confidentialité</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Réseaux sociaux</h3>
          <div className="social-icons">
            <a
              // biome-ignore lint/a11y/useValidAnchor: <explanation>
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src="./images/facebook-icon.png" alt="Facebook" />
            </a>
            <a
              // biome-ignore lint/a11y/useValidAnchor: <explanation>
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src="./images/instagram-icon.png" alt="Instagram" />
            </a>
            <a
              // biome-ignore lint/a11y/useValidAnchor: <explanation>
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src="./images/twitter-icon.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Grimpeurs Connectés. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
