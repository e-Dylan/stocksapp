import { StatusBar } from 'expo-status-bar';
import React from 'react';

// Components
import { View } from 'react-native';
import { Text, Flex, Box, Button } from '@chakra-ui/react';
import { DockbarContainer, DockButtonsContainer } from './Dockbar.components';

// UI
import theme from '../../theme';

export default function Dockbar({ tabs, activeTab, setActiveTab }) {

	return (
		<DockbarContainer>
			<DockButtonsContainer>
				{ tabs.map((tab, index) => {
					if (tab.separator) {
						return (
							// MAKE A CUSTOM BUTTON COMPONENT
							<Button 
								bg="transparent" 
								m="5px" 
								color={activeTab === tab.id ? theme.colors.blue[500] : "white"} 
								mb="80px" 
								fontSize="10pt" 
								_hover={{color: theme.colors.blue[300]}}
								onClick={() => setActiveTab(tab.id)}
							>
								{tab.title}
							</Button>
						)
					} else {
						return (
							<Button 
								bg="transparent" 
								m="5px" 
								color={activeTab === tab.id ? theme.colors.blue[500] : "white"} 
								fontSize="10pt" 
								_hover={{color: theme.colors.blue[300]}} 
								onClick={() => setActiveTab(tab.id)}
							>
								{tab.title}
							</Button>
						)
					}
				}) }
			</DockButtonsContainer>
		</DockbarContainer>
	);
}
