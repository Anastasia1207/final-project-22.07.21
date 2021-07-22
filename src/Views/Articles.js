import Breadcrumbs from "../Components/Breadcrumbs";
import { NavLink } from "react-router-dom";
import articles from "../Data/Articles";

function Articles() {
  const breadcrumbPaths = [{ link: "/", title: "Home" }, { title: "Articles" }];

  const articleElements = articles.map((article, index) => {
    return (
      <div className="row mb-4 pt-3 pb-3 border rounded" key={index}>
        <div className="col-12 col-md-3 rounded">
          <NavLink to={"/articles/" + article.slug}>
            <img className="img-fluid" src={article.image} />
          </NavLink>
        </div>
        <div className="col-12 col-md-9">
          <h4>
            <NavLink
              style={{ textDecoration: "none", color: "#1EA348" }}
              to={"/articles/" + article.slug}
            >
              {article.title}
            </NavLink>
          </h4>
          <p className="text-muted">{article.text}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumbs paths={breadcrumbPaths} />
        </div>
      </div>
      {articleElements}
      <nav aria-label="Page navigation example">
        <ul
          className="pagination justify-content-end "
          style={{ paddingLeft: "1310px" }}
        >
          <li className="page-item">
            <NavLink className="page-link" to="/" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </NavLink>
          </li>
          <li className="page-item">
            <NavLink style={{ color: "#3498DB" }} className="page-link" to="/">
              1
            </NavLink>
          </li>
          <li className="page-item">
            <NavLink
              style={{ color: "#3498DB" }}
              className="page-link"
              to="/404"
            >
              2
            </NavLink>
          </li>
          <li className="page-item">
            <NavLink style={{ color: "#3498DB" }} className="page-link" to="/">
              3
            </NavLink>
          </li>
          <li className="page-item">
            <NavLink style={{ color: "#3498DB" }} className="page-link" to="/">
              4
            </NavLink>
          </li>
          <li className="page-item">
            <NavLink style={{ color: "#3498DB" }} className="page-link" to="/">
              5
            </NavLink>
          </li>
          <li className="page-item">
            <NavLink className="page-link" to="/" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Articles;
