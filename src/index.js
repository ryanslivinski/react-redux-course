// import React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

import App from './components/App';

// take react component and show to screen
ReactDOM.render(<App />, document.querySelector('#root'));

// people dropping off a form (Action Creators)
const createPolicy = (name, amount) =>
{
    return { // Action (a form in our analogy)
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: amount
        }
    };
};

const deletePolicy = (name) =>
{
    return {
        type: 'DELETE_POLICY',
        payload: {
        	name: name
        }
    };
};

const createClaim = (name, amountToCollect) =>
{
	return {
		type: 'CREATE_CLAIM',
		payload: {
			name: name,
			amountToCollect: amountToCollect
		}
  	};
};

// Reducers (Departments)
const claimsHistory = (oldListOfClaims = [], action) =>
{
	if(action.type === 'CREATE_CLAIM'){
    	// we care about this action (form)
    
    	// ... creates new array, ALWAYS RETURN NEW ARRAY, NEVER MODIFY OLD ONE
    	return [...oldListOfClaims, action.payload]; // adds action.payload to array
  	}
  
  	// we dont care about the action (form)
  	return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) =>
{
	if(action.type === 'CREATE_CLAIM')
	{
		return (bagOfMoney - action.payload.amountToCollect);
	}

	else if(action.type === 'CREATE_POLICY')
	{
		return (bagOfMoney + action.payload.amount);
	}

	return bagOfMoney;
};

const policies = (listOfPolicies = [], action) =>
{
	if(action.type === 'CREATE_POLICY')
	{
		return [...listOfPolicies, action.payload.name];
	}

	else if(action.type === 'DELETE_POLICY')
	{
		return listOfPolicies.filter(name => name !== action.payload.name);
	}

	return listOfPolicies;
};

const ourDepartments = combineReducers(
	{
		accounting: accounting,
		claimsHistory: claimsHistory,
		policies: policies
	}
);

const store = createStore(ourDepartments);

store.dispatch(createPolicy('Ryan', 420));
store.dispatch(createPolicy('Matt', 69));
store.dispatch(createPolicy('Liz', 20));

store.dispatch(createClaim('Ryan', 9));
store.dispatch(createClaim('Matt', 50));

store.dispatch(deletePolicy('Liz'));
console.log(store.getState());