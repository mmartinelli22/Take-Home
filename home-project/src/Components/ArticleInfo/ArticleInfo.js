import { Link } from 'react-router-dom'
const ArticleInfo = ({ selectedArticle, backToHome }) => {
    return (
        <div className='information-container' key={selectedArticle.title}>
            <h1 className='selected-title'>{selectedArticle.title}</h1>
            <p className='byline'>{selectedArticle.byline}</p>
            <h2 className="abstract">{selectedArticle.abstract}</h2>
            <img
                className="media"
                src={
                    !selectedArticle.multimedia ? (
                        <div></div>
                    ) : (
                        selectedArticle.multimedia[0].url
                    )
                }
                alt="/"
            />
            <a
                className="website-anchor"
                target="_blank"
                rel="noreferrer"
                href={selectedArticle.url}
            >
                Click Here to see on NY Times Website
            </a>
            <Link to="/" style={{ textDecoration: "none" }}>
                <button onClick={backToHome}>Return Home</button>
            </Link>
        </div>
    )
}
export default ArticleInfo;