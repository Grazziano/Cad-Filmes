import React from 'react';
import Home from './Home'
import FormCadastro from './FormCadastro'
import Listagem from './Listagem';
import Resumo from './Resumo';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro/" component={FormCadastro} />
        <Route path="/listagem/" component={Listagem} />
        <Route path="/resumo/" component={Resumo} />
      </Router>
    </div>
  );
}

export default App;
