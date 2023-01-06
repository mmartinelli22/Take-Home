import './App.css';
import fetchData from '../apiCalls';
import { Route, Switch } from 'react-router-dom'
import React from 'react';
import NavBar from './NavBar/NavBar';
import { useEffect, useState } from 'react';
import ArticleContainer from './articleContainer/articleContainer';
import ArticleInfo from './ArticleInfo/ArticleInfo';
import ErrorMessage from './Error/Error';
const App = () => {
    const [allArticles, setAllArticles] = useState([]);
    const [title, setTitle] = useState("")
    const [selectedArticle, setSelected] = useState([])

    useEffect(() => {
        fetchData(`home`).then((data) => setAllArticles(data.results))
    }, [])

    const displaySingleArticle = (title) => {
        const articleChoices = allArticles.find((article) => article.title === title)
        setSelected(articleChoices)
    }
    const searchQuery = (section) => {
        fetchData(section).then((data) => setAllArticles(data.results));
        setTitle(section)
    }
    const backToHome = () => {
        fetchData(`home`).then((data) => setAllArticles(data.results));
        setTitle(`home`)
    }
    return (
        <div className='App'>
            <h1 className='app-title'>NY Times News Reader</h1>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <div>
                            <NavBar searchQuery={searchQuery} />
                            <ArticleContainer
                                title={title}
                                articles={allArticles}
                                displaySingleArticle={displaySingleArticle}
                            />
                        </div>
                    )}
                />
                <Route
                    exact
                    path="/Article"
                    render={() => (
                        <div>
                            <ArticleInfo backToHome={backToHome} selectedArticle={selectedArticle} />
                        </div>
                    )}
                />
                <Route
                    path="*"
                    render={() => (
                        <div>
                            <ErrorMessage />
                        </div>
                    )}
                />
            </Switch>
        </div>
    )
}



export default App;
