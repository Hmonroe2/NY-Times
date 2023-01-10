
import './App.css';
import getNewsData from '../../apiCalls';
import { useEffect, useState } from 'react';
import HomePage from '../HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getNewsData().then((data) => {
      setArticle(data.results);
    });
    // console.log(data)
  }, []);

  console.log('article', article);

  return (
    <section className="App">
      <Switch>
        <Route exact path="/" render={() => <HomePage articles={article} /> } />
      </Switch>
    </section>
  );
}

export default App;
