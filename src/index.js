import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import App from './App';
import SimpleReactLightbox from 'simple-react-lightbox';


ReactDOM.render(
  <React.StrictMode>
      <SimpleReactLightbox>
    <App />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);


