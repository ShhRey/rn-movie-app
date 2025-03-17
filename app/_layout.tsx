import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
	return <Stack>
		{/* Hiding Default Header for Group Route */}
		<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		<Stack.Screen name="movie/[id]" options={{ headerShown: false }} />
	</Stack>
}
