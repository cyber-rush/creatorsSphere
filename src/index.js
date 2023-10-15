import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/styles.css'
import './styles/navbar.css'
import './styles/heroSection.css'
import './styles/keyFeaturesSection.css'
import './styles/callToAction.css'
import './styles/callToAction1.css'
import './styles/bannerSection.css'
import './styles/affiliateProgramSection.css'
import './styles/commonButton.css'
import './styles/footer.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
