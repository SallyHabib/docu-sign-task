import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store';
import { Container } from "semantic-ui-react";
import Genreroutes from './app/modules/genres/router';
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
function App() {
	return (
		<div style={{ margin: 20 }}>
			<Container style={{ marin: 20 }}>
				<Provider store={store}>
					<Genreroutes />
				</Provider>
			</Container>
		</div>
	);
}

export default App;
