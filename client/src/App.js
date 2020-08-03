import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';

import { listLogEntries } from './api';

const App = () => {
	const [viewport, setViewport] = useState({
		width: '100vw',
		height: '100vh',
		latitude: -27.592534,
		longitude: -48.58702,
		zoom: 3,
	});

	useEffect(() => {
		(async () => {
			const logEntries = await listLogEntries();
			console.log(logEntries);
		})();
	}, []);

	return (
		<ReactMapGL
			{...viewport}
			mapStyle="mapbox://styles/thecjreynolds/ck117fnjy0ff61cnsclwimyay"
			mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
			onViewportChange={(nextViewport) => setViewport(nextViewport)}
		/>
	);
};

export default App;
