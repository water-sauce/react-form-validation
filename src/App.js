import React, { Component } from 'react';
import './App.css';
import CreditCardForm from './containers/CreditCardForm.js'

class App extends Component {
	render() {
		return (
			<div className="App">
				<CreditCardForm />
				<div className="background right-container container"></div>
			</div>
		);
	}
}

export default App;
