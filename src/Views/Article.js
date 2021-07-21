import Breadcrumbs from "../Components/Breadcrumbs";
import articles from "../Data/Articles";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

// import articles from '../Views/Articles';

function Article() {
  const { articleId, productId, articlesId } = useParams();
  const filteredArticle = articles.filter((article) => {
    return articleId == article.slug;
  });
  const article = filteredArticle[0];
  const [mainImage, setMainImage] = useState(articles.image);

  const breadcrumbPaths = [
    { link: "/", title: "Home" },
    { link: "/articles", title: "Articles" },
    //   { link: `/articles/${article.slug}`, title: article.title },
    { title: article.title },
  ];

  // const updateMainImage = (event) => {

  // }

  // const productsCards= product.map((product, index) => {
  //     return ()
  // })

  // }
  // const imageThumbnails = product.images.map((image, index) => {
  //     return (
  //         <div className="col-4 mt-3" key={index}>
  //         <img className="img-fluid" src={image} />
  //         </div>
  //     )
  // })

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumbs paths={breadcrumbPaths} />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h3>{article.title}</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-4 ">
          <SRLWrapper>
            <div className="row">
              <div className="col ps-2">
                {/* <img src={articles.image} className="img-fluid" /> */}
                {/* src={mainImage}  */}
                <a href="https://picsum.photos/500/500">
                  <img
                    className="img-fluid p-6"
                    src="https://picsum.photos/400/400"
                  />
                </a>

                {/* <img className="img-fluid p-6"  src="https://picsum.photos/400/400" /> */}
              </div>
            </div>

            <div className="row">
              <div className="col-4 mt-3">
                <a href="https://placekitten.com/500/500">
                  <img
                    className="image-fluid"
                    src="https://placekitten.com/100/100"
                  />
                </a>
              </div>
              <div className="col-4 mt-3">
                <a href="https://picsum.photos/500/500">
                  <img
                    className="image-fluid"
                    src="https://picsum.photos/100/100"
                  />
                </a>
              </div>
              <div className="col-4 mt-3">
                <a href="https://placekitten.com/500/500">
                  <img
                    className="image-fluid"
                    src="https://placekitten.com/100/100"
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-4 mt-3">
                <a href="https://picsum.photos/500/500">
                  <img
                    className="image-fluid"
                    src="https://picsum.photos/100/100"
                  />
                </a>
              </div>
              <div className="col-4 mt-3">
                <a href="https://placekitten.com/500/500">
                  <img
                    className="image-fluid"
                    src="https://placekitten.com/100/100"
                  />
                </a>
              </div>
              <div className="col-4 mt-3">
                <a href="https://picsum.photos/500/500">
                  <img
                    className="image-fluid"
                    src="https://picsum.photos/100/100"
                  />
                </a>
              </div>
            </div>
          </SRLWrapper>
        </div>
        <div className="col-12 col-md-8 ">
          {/* <p>{articles.description}</p> */}
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Why do we use it? It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).What is Lorem Ipsum? Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Article;
