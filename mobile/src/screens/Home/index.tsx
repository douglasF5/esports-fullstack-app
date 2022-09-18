import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import logoImg from '../../assets/logo-nlw-esports.png';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

export function Home() {

    const [gamesListData, setGamesListData] = useState<GameCardProps[]>([]);
    const navigation = useNavigation();

    function goToGame({ id, title, bannerUrl }: GameCardProps) {
        navigation.navigate('game', { id, title, bannerUrl });
    }

    useEffect(() => {
        fetch('http://192.168.0.3:3333/games')
            .then(response => response.json())
            .then(data => setGamesListData(data));
    }, []);

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image
                    source={logoImg}
                    style={styles.logo}
                />
                <Heading
                    title="Encontre seu duo!"
                    subtitle="Selecione o game que deseja jogar..."
                />

                <FlatList
                    data={gamesListData}
                    keyExtractor={game => game.id}
                    renderItem={({ item }) => (
                        <GameCard
                            data={item}
                            onPress={() => goToGame(item)}
                        />
                    )}
                    contentContainerStyle={styles.contentList}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </SafeAreaView>
        </Background>
    );
}