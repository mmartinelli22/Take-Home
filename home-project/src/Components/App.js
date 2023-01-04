import './App.css';
import fetchData from '../apiCalls';
import React from 'react';
import { useEffect, useState } from 'react';
const App = () => {
    const [allArticles, setAllArticles] = useState([]);

    useEffect(() => {
        fetchData(`home`).then((data) => setAllArticles(data.results))
    }, [])
    return (
        <div className='App'>its woeking</div>
    )
}



export default App;
