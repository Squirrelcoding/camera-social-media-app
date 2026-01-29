import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useEvent } from 'expo';
import { useRouter } from 'expo-router';
import { useVideoPlayer, VideoView } from 'expo-video';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CameraScreen() {
	const colorScheme = useColorScheme();
	const colors = Colors[colorScheme ?? 'light'];
	const router = useRouter();

	const videoSource = `https://stream.mux.com/CSK7P5Dp00Bpz6ZTE01029A1I3VBGzREYmSduniDW4bm2s.m3u8`;

	const player = useVideoPlayer(videoSource, player => {
		player.loop = true;
		player.play();
	});

	const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });


	return (
		<View style={[styles.container, { backgroundColor: colors.background }]}>
			<View style={styles.content}>
				<Text style={[styles.title, { color: colors.text }]}>Camera</Text>
				<Text style={[styles.subtitle, { color: colors.text }]}>
					Start streaming to share live moments
				</Text>
			</View>

			<VideoView 
				style={styles.video} 
				player={player} 
				allowsFullscreen 
				allowsPictureInPicture 
			/>

			<View style={styles.controlsContainer}>
				<Button
					title={isPlaying ? 'Pause' : 'Play'}
					onPress={() => {
						if (isPlaying) {
							player.pause();
						} else {
							player.play();
						}
					}}
				/>
			</View>

			<TouchableOpacity
				style={[styles.backButton, { backgroundColor: colors.tint }]}
				onPress={() => router.back()}
			>
				<Text style={[styles.buttonText, { color: colors.background }]}>
					Back
				</Text>
			</TouchableOpacity>
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
	video: {
		width: 350,
		height: 275,
	},
	controlsContainer: {
		padding: 10,
	},
	backButton: {
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 8,
	},
	buttonText: {
		fontSize: 16,
		fontWeight: '600',
	},
});
