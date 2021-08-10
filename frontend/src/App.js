import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Landing from './pages/Landing';
import Review from './pages/Review';
import ReviewDetails from './pages/details/ReviewDetails';
import Guide from './pages/Guide';
import Recipes from './pages/Recipes';
import Navbar from './components/Navbar';
import big from './images/big-eclipse.svg';
import mid from './images/mid-eclipse.svg';
import small from './images/small-eclipse.svg';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Navbar />
        <div className='App'>
          <Switch>
            <Route exact path='/'>
              <Landing />
            </Route>
            <Route path='/review'>
              <Review />
            </Route>
            <Route path='/RevDetails/:id'>
              <ReviewDetails />
            </Route>
            <Route path='/guide'>
              <Guide />
            </Route>
            <Route path='/recipes/:id'>
              <Recipes />
            </Route>
          </Switch>
        </div>
        <img className='big-circle' src={big} alt='' />
        <img className='mid-circle' src={mid} alt='' />
        <img className='small-circle' src={small} alt='' />
      </ApolloProvider>
    </Router>
  );
}

export default App;
