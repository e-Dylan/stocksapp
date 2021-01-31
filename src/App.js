import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

// UI
import theme from './theme';
import { ThemeProvider, CSSReset } from '@chakra-ui/react';

// Components
import Dockbar from './components/Dockbar/Dockbar';
import Dashboard from './components/Dashboard/Dashboard';

import { View } from 'react-native';


export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CSSReset />
			<Router>
				<Switch>
					<Route exact path="/">
						<Dashboard />
					</Route>
					<Route path="account">
						{/* <Account /> */}
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}