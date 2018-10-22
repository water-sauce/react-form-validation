import React, { Component } from 'react';
import './App.css';
import CreditCardForm from './containers/CreditCardForm.js'

class App extends Component {
	render() {
		return (
			<div className="App">
				<CreditCardForm />
				<div className="container container-right">
					<h1>Unlock the power of the world’s leading subscription-based model.</h1>
				</div>
			</div>
		);
	}
}

export default App;
