import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import cadastrarVideo from './pages/cadastro/Video'
import cadastroCategoria from './pages/cadastro/Categoria';

import { BrowserRouter, Switch, Route} from 'react-router-dom';


// É o arquivo que irá inicializar o react
// A tag BrowserRouter envolve todo a nossa aplicação
// O Switch, ele vai fazer uma espécie de 'if' no app, verificando a rota qu está sendo acessada;
// O Route, é como vai ser declarada cada página existente;

ReactDOM.render(

  <BrowserRouter> 

    <Switch>

      <Route path="/cadastro/video" component={cadastrarVideo} />
      <Route path="/cadastro/categoria" component={cadastroCategoria} />
      <Route path="/" component={Home} exact/>
      <Route component={()=>(<div>Página 404</div>)}/>

    </Switch>

  </BrowserRouter>,

  document.getElementById('root')
);

