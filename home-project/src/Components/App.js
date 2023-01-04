import './App.css';
import fetchData from '../apiCalls';
import { Route, Switch } from 'react-router-dom'
import React from 'react';
import NavBar from './NavBar/NavBar';
import { useEffect, useState } from 'react';
import ArticleContainer from './articleContainer/articleContainer';
const App = () => {
    const [allArticles, setAllArticles] = useState([]);
    const [title, setTitle] = useState("")

    useEffect(() => {
        fetchData(`home`).then((data) => setAllArticles(data.results))
    }, [])

    const displaySingleArticle = (title) => {
        const articleChoices = allArticles.find((article) => article.title === title)
    }
    return (
        <div className='App'>
            <Route
                exact
                path="/"
                render={() => (
                    <div>
                        <ArticleContainer
                            title={title}
                            articles={allArticles}
                            displaySingleArticle={displaySingleArticle}
                        />
                    </div>
                )}
            />
        </div>
    )
}



export default App;
