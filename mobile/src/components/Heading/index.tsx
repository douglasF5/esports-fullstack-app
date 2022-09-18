import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

interface HeadingProps extends ViewProps {
    title: string;
    subtitle: string;
}

export function Heading({ title, subtitle, ...props }: HeadingProps) {
    return (
        <View style={styles.container} {...props}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.subtitle}>
                {subtitle}
            </Text>
        </View>
    );
}