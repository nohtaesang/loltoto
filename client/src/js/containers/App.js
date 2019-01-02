import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DevTools from './DevTools';
import Nav from './nav/Nav';
import Profile from './profile/Profile';
import Ranking from './ranking/Ranking';
import Match from './match/Match';
import Chatting from './chatting/Chatting';
import './app.css';

const App = () => (
	<BrowserRouter>
		<div id="app">
			<Nav />
			<div id="left">
				<Profile />
				<Ranking />
			</div>
			<div id="center">
				<Match />
			</div>
			<div id="right">
				<Chatting />
			</div>
			<DevTools />
		</div>
	</BrowserRouter>
);

export default App;
