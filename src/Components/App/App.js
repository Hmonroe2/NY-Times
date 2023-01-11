import './App.css';
import getNewsData from '../../apiCalls';
import { useEffect, useState } from 'react';
import HomePage from '../HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Details from '../Details/Details'

function App() {
  const [article, setArticle] = useState([]);
  const [categorizedArticle, setCategorizedArticle] = useState([]);
  const [data, setData] = useState('');
  const [error, setError] = useState('')

  console.log(article)

  useEffect(() => {
    getNewsData('home').then((data) => {
      const addedID = data.results.map((result , index) => ({
        ...result,  
        id: index++
      }))
      setArticle(addedID);
    })
    .then((error) => {
      setError(error)
    })
  }, []);

  const filterResultsByCategory = (category) => {
    
    console.log(category);
  };
  

  const findArticle = (id) => {
    let newId = parseInt(id)
    let articleDetails = article.find((article) => {
      return article.id === newId
    })
    // console.log(articleDetails)
    return articleDetails
  }

  return (
    <section className="App">
      <Navbar filter={filterResultsByCategory} />
      <Switch>
        <Route exact path="/" render={() => <HomePage articles={article} />} />
        <Route path="/:id" render={({ match }) => {
          return <Details data={findArticle(match.params.id)}  /> 
        }}/>
      </Switch>
    </section>
  );
}

export default App;
