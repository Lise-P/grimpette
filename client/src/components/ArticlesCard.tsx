import "../CSS/ArticlesCard.css";

function ArticleCard() {
  return (
    <>
      <h2>Nos articles sur la grimpe</h2>

      <div className="articles-container">
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

        <figure className="article">
          <img
            className="imgMain"
            src="./images/climbing_article3.jpg"
            alt="climbing"
          />
          <h3>Les meilleures techniques de bloc</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            quisquam quidem praesentium, iure voluptatum hic dolorum nesciunt,
            voluptates molestiae maiores quis pariatur culpa provident.
          </p>
        </figure>
      </div>
    </>
  );
}

export default ArticleCard;
