import { useMeeting } from "@videosdk.live/react-native-sdk";
import { Text, TouchableOpacity } from "react-native";

export default function MeetingView() {
	const { startLivestream, stopLivestream } = useMeeting();

	const handleStartLivestream = () => {
		// Start Livestream
		startLivestream(
			[
				{
					url: "rtmp://a.rtmp.youtube.com/live2",
					streamKey: "key",
				},
			],
			{
				layout: {
					type: "GRID",
					priority: "SPEAKER",
					gridSize: 4,
				},
				theme: "DARK",
			}
		);
	};

	const handleStopLivestream = () => {
		// Stop Livestream
		stopLivestream();
	};

	return (
		<>
			<TouchableOpacity
				onPress={() => {
					handleStartLivestream();
				}}
			>
				<Text>Start Livestream</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => {
					handleStopLivestream();
				}}
			>
				<Text>Stop Livestream</Text>
			</TouchableOpacity>
		</>
	);
};