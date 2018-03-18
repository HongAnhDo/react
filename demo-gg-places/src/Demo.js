import React from 'react';
import App from './App';

const Demo = () => (
  <div className="page-wrapper">
    <div className="container">
      <h1 className="display-3">
        react-places-autocomplete <i className="fa fa-map-marker header" />
      </h1>
      <p className="lead">
        A React component to build a customized UI for Google Maps Places
        Autocomplete
      </p>
      <hr />
      <a
        href="https://github.com/kenny-hibino/react-places-autocomplete"
        className="Demo__github-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="fa fa-github Demo__github-icon" />
        &nbsp;View on GitHub
      </a>
    </div>
    <div className="container">
      <App />
    </div>
  </div>
);

export default Demo;
