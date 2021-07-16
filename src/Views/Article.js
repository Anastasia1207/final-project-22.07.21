
import Breadcrumbs from '../Components/Breadcrumbs';
// import { useParams } from 'react-router-dom';

// import { NavLink, useParams } from 'react-router-dom';
import articles from '../Views/Articles';


function Article() {
    const breadcrumbPaths = [
        { link: '/', title: 'Home' },
        { link: '/articles', title: 'Articles' },
        { title: 'Article 1' },
        // { link: `/articles/${articles.title}`, title: articles.title },
   
    ];

    return (
        <div className="container">
        <div className="row">
        <div className="col">
        <Breadcrumbs paths={breadcrumbPaths} />

        </div>
        </div>
        <div className="row">
        <div className="col-12 col-md-4">
             {/* <h1>{product.title}</h1> */}
             <h1>Article 1</h1>
        </div> 
        <div className="col-12 col-md-8">
            {/* <p>{product.desription}</p> */}
            <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

 </p>

        </div>
        </div>
        </div>
    )
}

export default Article;