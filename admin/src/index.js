import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './Admin';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
  <Admin />
</BrowserRouter>

    ,
  document.getElementById('root')
);
