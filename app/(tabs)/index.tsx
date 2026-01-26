import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Fetch active streams from backend
		fetchStreams();
	}, []);

	const fetchStreams = async () => {
		try {
			// TODO: Connect to WebSocket for real-time stream updates
			setLoading(false);
		} catch (error) {
			console.error('Failed to fetch streams:', error);
			setLoading(false);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Live Streams</Text>
			{loading ? (
				<Text style={styles.text}>Loading streams...</Text>
			) : streams.length === 0 ? (
				<Text style={styles.text}>No active streams</Text>
			) : (
				// TODO: Render stream markers on map
				<Text style={styles.text}>Map with stream markers</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	text: {
		fontSize: 16,
		color: '#666',
	},
});