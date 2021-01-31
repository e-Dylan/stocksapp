import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { Text, Flex, Box } from '@chakra-ui/react';
import Dockbar from '../Dockbar/Dockbar';
import { DashboardContainer, DashboardContent } from './Dashboard.components';

import OverviewTab from '../../views/Dashboard/OverviewTab'
import AllStocksTab from '../../views/Dashboard/AllStocksTab'
import TrackingTab from '../../views/Dashboard/TrackingTab'

import AccountTab from '../../views/Dashboard/AccountTab'
import SettingsTab from '../../views/Dashboard/SettingsTab'

export default function Dashboard() {

	const tabs = [
		{
			id: "overview",
			title: "Overview",
			Component: OverviewTab	
		},
		{
			id: "allStocks",
			title: "All Stocks",
			Component: AllStocksTab
		},
		{
			id: "tracking",
			title: "Tracking",
			Component: TrackingTab,
			separator: true,
		},
		{
			id: "account",
			title: "Account",
			Component: AccountTab	
		},
		{
			id: "settings",
			title: "Settings",
			Component: SettingsTab
		},
	]

	const [activeTab, setActiveTab] = useState(tabs[0].id);

	return (
		<DashboardContainer>
			<Dockbar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
			<DashboardContent>
				{ tabs.map((tab, index) => {
					if (activeTab === tab.id) {
						return (
							<tab.Component />
						)
					}
				})}
			</DashboardContent>

			<StatusBar style="auto" />
		</DashboardContainer>
	);
}