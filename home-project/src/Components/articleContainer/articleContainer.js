import SingleArticle from "../individualArticle/individualArticle";
import './articleContainer.css'
const ArticlesContainer = ({
    articles,
    section,
    title,
    displaySingleArticle,
}) => {
    let sortedArticles = articles.sort((a, b) => a.title.localeCompare(b.title));


    const articleList = sortedArticles.map((article) => {
        return (
            <SingleArticle
                id={article.title}
                key={article.title}
                section={article.section}
                title={article.title}
                byline={article.byline}
                multimedia={article.multimedia}
                displaySingleArticle={displaySingleArticle}
            />
        );
    });
    if (!section || !articles) {
        <p>Loading...</p>;
    }
    return (
        <div className="section-container">
            <h1 className="top-stories-or-title">
                {!title
                    ? `Home Section`
                    : `${title.charAt(0).toUpperCase() + title.slice(1)} Section`}
            </h1>
            <div className="articles-container">{articleList}</div>
        </div>
    );
};
export default ArticlesContainer