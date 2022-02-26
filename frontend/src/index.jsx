import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<BrowserRouter>
			<App />
		</BrowserRouter>
		<Footer />
	</React.StrictMode>,
	document.getElementById('root')
);
