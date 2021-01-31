import React from 'react';
import { View } from 'react-native';
import { Tabs, TabPanels, TabPanel, Icon } from '@chakra-ui/react';

export default function Nav({ tabs, style }) {
	return (
		<Tabs>
			<NavContainer>
				<TabList>
					{ tabs.map((tab, index) => { 
						switch (style) {
							case "link":
								return (
									<Tab
										key={index}
									>
										{tab.iconName && <Icon name="search" size="20px" />}
										{tab.header}
									</Tab>
								)
						}
					})}
				</TabList>
			</NavContainer>
		</Tabs>
	);
}
