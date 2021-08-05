// import React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';

// Create React component
const App = () =>
{
	return <div>Hello World!</div>
};

// take react component and show to screen
ReactDOM.render(<App />, document.querySelector('#root'));