import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Landing from './pages/Landing';
import Review from './pages/Review';
import Guide from './pages/Guide';
import Category from './pages/Category';
import Recipes from './pages/Recipes';
import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Landing />
            </Route>
            <Route path='/review'>
              <Review />
            </Route>
            <Route path='/category/:id'>
              <Category />
            </Route>
            <Route path='/guide'>
              <Guide />
            </Route>
            <Route path='/recipes/:id'>
              <Recipes />
            </Route>
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
