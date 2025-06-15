import { View } from 'react-native';

import { Typography } from '@/components/Typography';
import { useStyles } from '@/hooks';

import { getStyles } from './styles';

export const SelectEmpty = () => {
  const styles = useStyles(getStyles);

  return (
    <View style={styles.container}>
      <Typography variant="s-400">No options found</Typography>
    </View>
  );
};
