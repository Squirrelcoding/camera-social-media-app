import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
	const colorScheme = useColorScheme();
	const colors = Colors[colorScheme ?? 'light'];
	const router = useRouter();

	const handleSignIn = () => {
		// Bypass auth for now - just navigate to home
		router.replace('/(tabs)');
	};

	const handleCameraPress = () => {
		router.push('/(tabs)/camera');
	};

	return (
		<View style={[styles.container, { backgroundColor: colors.background }]}>
			<View style={styles.content}>
				<Text style={[styles.title, { color: colors.text }]}>Global Live Portals</Text>
				<Text style={[styles.subtitle, { color: colors.text }]}>
					Experience live moments from around the world
				</Text>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={[styles.primaryButton, { backgroundColor: colors.tint }]}
					onPress={handleSignIn}
				>
					<Text style={[styles.buttonText, { color: colors.background }]}>
						Get Started
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.secondaryButton, { borderColor: colors.tint }]}
					onPress={handleCameraPress}
				>
					<Text style={[styles.secondaryButtonText, { color: colors.tint }]}>
						Go to Camera
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingTop: 60,
		paddingBottom: 40,
	},
	content: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		marginBottom: 12,
		textAlign: 'center',
	},
	subtitle: {
		fontSize: 16,
		textAlign: 'center',
		opacity: 0.7,
	},
	buttonContainer: {
		width: '100%',
	},
	primaryButton: {
		paddingVertical: 16,
		borderRadius: 8,
		alignItems: 'center',
		marginBottom: 12,
	},
	secondaryButton: {
		paddingVertical: 16,
		borderRadius: 8,
		alignItems: 'center',
		borderWidth: 2,
	},
	buttonText: {
		fontSize: 16,
		fontWeight: '600',
	},
	secondaryButtonText: {
		fontSize: 16,
		fontWeight: '600',
	},
});
