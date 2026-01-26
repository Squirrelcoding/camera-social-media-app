import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useAuth } from '@/lib/auth-context';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
	const colorScheme = useColorScheme();
	const colors = Colors[colorScheme ?? 'light'];
	const { loading, isSigningIn } = useAuth();

	useEffect(() => {
		// const googleClientId = Constants.expoConfig?.extra?.googleClientId || process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID;
		
		GoogleSignin.configure({
			webClientId: "137494970229-jrupj5ndbiffu32dng99rvjgrd54n8u2.apps.googleusercontent.com",
		});
	}, []);

	const handleGoogleSignIn = async () => {
		try {
			await GoogleSignin.hasPlayServices();
			const response = await GoogleSignin.signIn();
			
			if (response.data?.idToken) {
				await isSigningIn(response.data.idToken);
			}
		} catch (error: any) {
			if (error.code === statusCodes.IN_PROGRESS) {
				Alert.alert('Sign In', 'Sign in is already in progress');
			} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				Alert.alert('Error', 'Google Play Services is not available on this device');
			} else {
				Alert.alert('Sign In Error', error.message || 'Failed to sign in with Google');
			}
		}
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
					style={[styles.primaryButton, { backgroundColor: colors.tint, opacity: loading ? 0.6 : 1 }]}
					onPress={handleGoogleSignIn}
					disabled={loading}
				>
					<Text style={[styles.buttonText, { color: colors.background }]}>
						{loading ? 'Signing In...' : 'Continue with Google'}
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
	},
	buttonText: {
		fontSize: 16,
		fontWeight: '600',
	},
});
