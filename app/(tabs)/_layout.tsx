import { ImageBackground, Image, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

function TabIcon({ focused, icon, title }: any) {
	if (focused) {
		return (
			<ImageBackground
				source={images.highlight}
				className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
			>
				<Image source={icon} tintColor="#151312" className="size-5" />
				<Text className="text-secondary text-base font-semibold ml-2">
					{title}
				</Text>
			</ImageBackground>
		);
	}

	return (
		<View className="size-full justify-center items-center mt-4 rounded-full">
			<Image source={icon} tintColor="#A8B5DB" className="size-5" />
		</View>
	);
}


const _layout = () => {
	return (
		<Tabs 
			screenOptions={{
				tabBarShowLabel: false,
				tabBarItemStyle: {
					width: '100%',
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center'
				},
				tabBarStyle: {
					backgroundColor: '#0F0D23',
					borderRadius: 30,
					marginHorizontal: 10,
					marginBottom: 30,
					height: 55,
					position: 'absolute',
					overflow: 'hidden',
					borderWidth: 2,
          			borderColor: '#0F0D23'
				}
			}}
		>
			{/* Hiding Default Header for Screens */}
			<Tabs.Screen
				name='index'
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} icon={icons.home} title="Home" />
					)
				}}
			/>
			<Tabs.Screen
				name='search'
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} icon={icons.search} title="Search" />
					)
				}}
			/>
			<Tabs.Screen
				name='saved'
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} icon={icons.save} title="Save" />
					)
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} icon={icons.person} title="Profile" />
					)
				}}
			/>
		</Tabs>
	)
}

export default _layout