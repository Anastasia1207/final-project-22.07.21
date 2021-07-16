import Breadcrumbs from "../Components/Breadcrumbs";
import { NavLink } from "react-router-dom";



function Articles() {
    const breadcrumbPaths = [
        {link: '/', title: 'Home'},
        {title: 'Articles'},
    ]
    const articles = [
        {
            title: 'Articles 1',
            image:'https://picsum.photos/150/150',
            text: 'Some info about the article and Some info about the article again & Some info about the article and Some info about the article again. Some info about the article and Some info about the article again & Some info about the article and Some info about the article again. Some info about the article and Some info about the article again & Some info about the article and Some info about the article again',
            slug: 'first-article',
        },
        {
            title: 'Articles 2',
            image:'https://picsum.photos/150/150',
            text: 'Some info about the article and Some info about the article again & Some info about the article and Some info about the article again. Some info about the article and Some info about the article again & Some info about the article and Some info about the article again. Some info about the article and Some info about the article again & Some info about the article and Some info about the article again',
            slug: 'second-article',
        },
        {
            title: 'Articles 3',
            image:'https://picsum.photos/150/150',
            text: 'Some info about the article and Some info about the article again & Some info about the article and Some info about the article again. Some info about the article and Some info about the article again & Some info about the article and Some info about the article again. Some info about the article and Some info about the article again & Some info about the article and Some info about the article again',
            slug: 'third-article',
        },
    ];

    const articleElements = articles.map((article, index) => {
        return (
            <div className="row mb-4 pt-3 pb-3 border rounded" key={index}>
            <div className="col-12 col-md-3 rounded">
                <NavLink to={'/articles/' + article.slug}>
                <img className="img-fluid" src={article.image} />
               </NavLink>
                </div>
                <div className="col-12 col-md-9">
                    <h4><NavLink to={'/articles/' + article.slug}>{article.title}</NavLink></h4>
                <p className="text-muted">{article.text}</p>
  
                </div>
            </div>
        )
    })
    return (
        <div className="container">
            <div className="row">
            <div className="col">
                <Breadcrumbs paths={breadcrumbPaths}/>
                </div>
            </div>
        {articleElements}
        </div>
    )
}

export default Articles;