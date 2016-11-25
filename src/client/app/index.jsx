import React from 'react';
import ReactDOM from 'react-dom';
require('./../style.css');
import App from './App.jsx';

var Parent = React.createClass({
    render: function() {
        return (
            <div>
                <App />
            </div>
        )
    }
});

ReactDOM.render(
    <Parent />,
    document.getElementById('root')
);

