import React from 'react';

import { Switch, Route } from 'react-router-dom';
import './App.css';

// Import Components
import Header from './components/Header/Header';

// Import Pages
import PokeDex from './pages/PokeDex/PokeDex';
import PokeDetail from './pages/PokeDex/PokeDetail/PokeDetail';


function App() {

  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        {/* loading ? () : () */}

          <Switch>
            <Route exact path="/" render={() => {
              return (
                <PokeDex/>
              );
            }} />
            <Route path="/:charaId" component ={PokeDetail} />

          </Switch>

      </div>
    </div>
  );
}

export default App;
