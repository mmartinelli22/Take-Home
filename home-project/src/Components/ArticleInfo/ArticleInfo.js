import { Link } from 'react-router-dom'
import './ArticleInfo.css'
const dayjs = require("dayjs");
const ArticleInfo = ({ selectedArticle, backToHome }) => {
    return (
        <div className='information-container' key={selectedArticle.title}>
            <h1 className='selected-title'>{selectedArticle.title}</h1>
            <p className='byline'>{selectedArticle.byline}</p>
            <h2 className="abstract">{selectedArticle.abstract}</h2>
            <p className="published">
                Published on {dayjs(selectedArticle.published_date).format("dddd, MMMM D YYYY")}
            </p>
            <img
                className="image"
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
                className="anchor"
                target="_blank"
                rel="noreferrer"
                href={selectedArticle.url}
            >
                Click Here to see on NY Times Website
            </a>
            <Link to="/" style={{ textDecoration: "none" }}>
                <button className='home-button' onClick={backToHome}>Return Home</button>
            </Link>
        </div>
    )
}
export default ArticleInfo;