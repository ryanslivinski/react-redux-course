// import React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));
// take react component and show to screen
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
 document.querySelector('#root')
 );