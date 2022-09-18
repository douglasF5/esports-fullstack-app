import { Text, TouchableOpacity, View } from 'react-native';
import { GameController } from 'phosphor-react-native';
import { AdInfo } from '../AdInfo';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface AdCardProps {
	id: string;
	hourEnd: string;
	hourStart: string;
	name: string;
	useVoiceChannel: boolean;
	weekDays: string[];
	yearsPlaying: number;
}

interface Props {
	data: AdCardProps;
	onConnect: () => void;
}

export function AdCard({ data, onConnect }: Props) {
	return (
		<View style={styles.container}>
			<AdInfo
				label='Nome'
				value={data.name}
			/>
			<AdInfo
				label='Tempo de jogo'
				value={`${data.yearsPlaying} ano${data.yearsPlaying !== 1 ? 's' : ''}`}
			/>
			<AdInfo
				label='Disponibilidade'
				value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd} `}
			/>
			<AdInfo
				label='Chamada de áudio'
				value={data.useVoiceChannel ? 'Sim' : 'Não'}
				valueColor={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
			/>

			<TouchableOpacity
				style={styles.button}
				onPress={onConnect}
			>
				<GameController
					color={THEME.COLORS.TEXT}
					size={20}
				/>
				<Text
					style={styles.buttonLabel}
				>Conectar</Text>
			</TouchableOpacity>
		</View>
	);
}