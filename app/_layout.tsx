import { Stack } from "expo-router";
import './globals.css';
import { StatusBar } from "react-native";

export default function RootLayout() {
	return (
		<>
			{/* Hiding Time and Battery from Statusbar */}
			{/* <StatusBar hidden={true} /> */}
			<Stack>
				{/* Hiding Default Header for Group Route */}
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
			</Stack>
		</>
	)
}
