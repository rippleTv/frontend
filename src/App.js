import React from 'react';
import AppRouter from './AppRouter';
import Login from './/components/Login';

function App() {
	return (
		<div className="App">
			<Login></Login>
			<AppRouter></AppRouter>
		</div>
	);
}

export default App;
