import { View, Text, ColorValue } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

interface AdInfoProps {
  label: string;
  value: string;
  valueColor?: ColorValue;
}

export function AdInfo({ label, value, valueColor = THEME.COLORS.TEXT }: AdInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>
      <Text
        style={[styles.value, { color: valueColor }]}
        numberOfLines={1}
      >
        {value}
      </Text>
    </View>
  );
}