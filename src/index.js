import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import App from './App';
import SimpleReactLightbox from 'simple-react-lightbox';
// import ReactHTMLDatalist from "react-html-datalist";


ReactDOM.render(
  <React.StrictMode>
       {/* <ReactHTMLDatalist> */}
      <SimpleReactLightbox>
    <App />
    </SimpleReactLightbox>
    {/* </ReactHTMLDatalist> */}
  </React.StrictMode>,
  document.getElementById('root')
);


