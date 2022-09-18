//FUNC/UTILS
import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

//BASE COMPONENTS
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';

//STYLES/ASSETS
import { THEME } from '../../theme';
import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';

//COMPONENTS
import { Background } from '../../components/Background';
import { GameParams } from '../../@types/navigation';
import { Heading } from '../../components/Heading';
import { AdCard, AdCardProps } from '../../components/AdCard';
import { DuoMatchModal } from '../../components/DuoMatchModal';

//COMPONENT DEFINITION
export function Game() {
	//FUNC/UTILS
	const navigation = useNavigation();
	const route = useRoute();
	const game = route.params as GameParams;

	//STATE
	const [adsListData, setAdsListData] = useState<AdCardProps[]>([]);
	const [discordDuoSelected, setDiscordDuoSelected] = useState('');

	//HANDLERS
	function handleGoBack() {
		navigation.goBack();
	}

	async function getDiscordUser(adsId: string) {
		fetch(`http://192.168.0.3:3333/ads/${adsId}/discord`)
			.then(response => response.json())
			.then(data => setDiscordDuoSelected(data.discord));
	}

	//FX
	useEffect(() => {
		fetch(`http://192.168.0.3:3333/games/${game.id}/ads`)
			.then(response => response.json())
			.then(data => setAdsListData(data));
	}, []);

	//RETURN STATEMENT
	return (
		<Background>
			<SafeAreaView style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={handleGoBack}>
						<Entypo
							name="chevron-thin-left"
							color={THEME.COLORS.CAPTION_300}
							size={20}
						/>
					</TouchableOpacity>
					<Image
						source={logoImg}
						style={styles.logo}
					/>

					<View style={styles.rightSlot} />
				</View>

				<Image
					source={{ uri: game.bannerUrl }}
					style={styles.cover}
					resizeMode='cover'
				/>

				<Heading
					title={game.title}
					subtitle='Conecte-se e comece a jogar!'
				/>

				<FlatList
					data={adsListData}
					keyExtractor={ad => ad.id}
					renderItem={({ item }) => (
						<AdCard
							data={item}
							onConnect={() => getDiscordUser(item.id)}
						/>
					)}
					horizontal
					contentContainerStyle={styles.contentList}
					style={styles.containerList}
					showsHorizontalScrollIndicator={false}
				/>
				<DuoMatchModal
					visible={discordDuoSelected.length > 0}
					onClose={() => setDiscordDuoSelected('')}
					discord={discordDuoSelected}
					transparent
					statusBarTranslucent
				/>
			</SafeAreaView>
		</Background>
	);
}