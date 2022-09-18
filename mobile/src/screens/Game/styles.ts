import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	header: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 32,
		margin: 28,
		justifyContent: 'space-between'
	},
	logo: {
		width: 72,
		height: 40
	},
	rightSlot: {
		width: 20,
		height: 20
	},
	cover: {
		width: '82%',
		height: 160,
		borderRadius: 8,
		marginTop: 8
	},
	containerList: {
		width: '100%',
		flexGrow: 0
	},
	contentList: {
		paddingHorizontal: 32,
		alignitems: 'flex-start'
	}
});