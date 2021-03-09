import React from 'react';
import ReactDOM from 'react-dom';
import Theater from "./Theater";
import {BrowserRouter} from 'react-router-dom';
ReactDOM.render(
<BrowserRouter>
  <Theater />
</BrowserRouter>
  ,
  document.getElementById('root')
);

