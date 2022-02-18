import { StatusBar } from 'expo-status-bar';
import Auth from './src/screens/Auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './src/screens/MainScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style='light' backgroundColor='rgba(0, 0, 0, 0.6)' />
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name='Auth' component={Auth} />
				<Stack.Screen name='MainScreen' component={MainScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
