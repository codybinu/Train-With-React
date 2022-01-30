import React from 'react';
import ReactDom from 'react-dom';
// var React = require('react');

//build component
const App = () => {
    return(
        <h1>hi from react</h1>
    )
}
ReactDom.render(<App/>, document.getElementById('root'))