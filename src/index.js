import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import App from './App';
import SimpleReactLightbox from 'simple-react-lightbox';
// import * as serviceWorker from './serviceWorker';
// import DemoForm from './DemoForm';


ReactDOM.render(
  <React.StrictMode>
     
      <SimpleReactLightbox>
      {/* <DemoForm /> */}
    <App />
    </SimpleReactLightbox>
 
  </React.StrictMode>,
  document.getElementById('root')
);


