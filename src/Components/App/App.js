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

  useEffect(() => {
    getNewsData('home').then((data) => {
      setArticle(data.results);
    })
    .then((error) => {
      setError(error)
    })
  }, []);

  const filterResultsByCategory = (category) => {
    
    console.log(category);
  };
  console.log(data);

  return (
    <section className="App">
      <Navbar filter={filterResultsByCategory} />
      <Switch>
        <Route exact path="/" render={() => <HomePage articles={article} />} />
        <Route path="/details/:id" render={({match}) => {
          <Details /> 
        }}/>
      </Switch>
    </section>
  );
}

export default App;
