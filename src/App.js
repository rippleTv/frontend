import React from 'react';
import AppRouter from './AppRouter';

import { injectState } from './context/index';

function App() {
	return (
		<div className="App">
			<AppRouter></AppRouter>
		</div>
	);
}

export default injectState(App);
