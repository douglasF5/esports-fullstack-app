import { ImageBackground } from 'react-native';
import backgroundImg from '../../assets/background-galaxy.png';
import { styles } from './styles';

interface BgProps {
    children: React.ReactNode;
}

export function Background({ children }: BgProps) {
    return (
        <ImageBackground
            source={backgroundImg}
            defaultSource={backgroundImg}
            style={styles.container}
        >
            {children}
        </ImageBackground>
    );
}