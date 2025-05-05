import React from 'react';
import { createRoot } from 'react-dom/client';
//importamso archivos jsx, y ponemos el nombre de la funcion exportado, 
//import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp} from "./FirstApp";
import { CounterApp} from "./CounterApp";



import './styles.css'; //importar estiloss

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterApp value={69}/>
    
  </React.StrictMode>
);
//<CounterApp value={69}/>
//