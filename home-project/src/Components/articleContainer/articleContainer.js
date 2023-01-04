import React from "react";
import SingleArticle from "../individualArticle/individualArticle"
const ArticleContainer = ({
    title,
    section,
    articles,
    displaySingleArticle
}) => {
    let sortArticles = articles.sort((a, b) => a.section.localeCompare(b.section))

    const articleList = sortArticles.map((article) => {
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
        )
    })
    if (!section || !articles) {
        <p>..Loading Articles...</p>
    }
    return (
        <div className="sections">
            <h1 className="top-tags">
                {!title ? `Home` : `${title.charAt(0).toUpperCase() + title.slice(1)} Section`}
            </h1>
        </div>
    )
}
export default ArticleContainer;