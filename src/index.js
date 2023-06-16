import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Advise from './Advise';
import Try from './Try';
import Footer from './Footer'
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  < Header /> 
  <Advise /> 
  <Try />
  <Footer />
  </React.StrictMode>
);

reportWebVitals();
