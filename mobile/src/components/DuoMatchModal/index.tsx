//BASE/UTILS 
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { useState } from 'react';

//BASE COMPONENTS
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';

//STYLE/ASSETS
import { styles } from './styles';
import { THEME } from '../../theme';

//COMPONENTS
import { Heading } from '../Heading';

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatchModal({ discord, onClose, ...rest }: Props) {
  const [isCopying, setIsCopying] = useState(false);

  async function handleCopyToClipboard() {
    setIsCopying(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert('Discord copiado!', 'Usário copiado para a área de transferência.');

    setIsCopying(false);
  }

  return (
    <Modal
      animationType='fade'
      {...rest}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons
              name='close'
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight='regular'
          />

          <Heading
            title="Let's play!"
            subtitle="Agora é só começar a jogar."
            style={{ alignItems: 'center', marginTop: 24 }}
          />

          <Text style={styles.label}>
            Adicione no Discord
          </Text>
          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyToClipboard}
            disabled={isCopying}
          >
            <Text style={styles.discord}>
              {isCopying
                ? <ActivityIndicator color={THEME.COLORS.PRIMARY} />
                : discord}
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </Modal>
  );
}