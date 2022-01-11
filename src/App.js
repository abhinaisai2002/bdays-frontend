

import './App.css';
import Home from './components/Home';
import AddCard from './components/AddCard';
import Card from './components/Card';
import TopCards from './components/TopCards';

import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Route path='/' component={Home} exact />
      <Route path='/addcard' component={AddCard} exact />
      <Route path='/card/:id' component={Card} exact />
      <Route path='/topcards' component={TopCards} exact />
    </div>
  );
}

export default App;
