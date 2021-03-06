import { NavLink } from "react-router-dom";

function Home() {
  const articles = [
    {
      title: "Articles 1",
      image: "https://picsum.photos/200/200",
      text: "Some info about the article",
      id: "first-article",
    },
    {
      title: "Articles 2",
      image: "https://placebear.com/200/200",
      text: "Some info about the article",
      id: "second-article",
    },
    {
      title: "Articles 3",
      image: "https://placekitten.com/200/200",
      text: "Some info about the article",
      id: "third-article",
    },
  ];

  const articleElements = articles.map((article, index) => {
    return (
      <div className="col" key={index}>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={article.image}
                className="img-fluid rounded"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  <NavLink
                    style={{ textDecoration: "none", color: "#1EA348" }}
                    to={"/articles/" + article.id}
                  >
                    {article.title}
                  </NavLink>
                </h5>
                <p className="card-text">{article.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner mt-3 rounded">
              <div className="carousel-item active">
                <img
                  src="https://picsum.photos/800/300"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="http://lorempixel.com/800/300"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://picsum.photos/800/300"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col mt-3">
          <h4>Most recent articles</h4>
        </div>
      </div>
      <div className="row">{articleElements}</div>
    </div>
  );
}

export default Home;
