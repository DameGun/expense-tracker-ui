import type { FC } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

import { ArrowBackIcon } from '@/assets';
import { SelectEmpty } from '@/components/Select/components/SelectEmpty';
import { Typography } from '@/components/Typography';
import { useStyles, useTheme } from '@/hooks';

import { getStyles } from './styles';

import { useHandleSelectSearch } from '../../hooks';
import type { ISelectOption, THandleSelectFn, TSelectValue } from '../../types';
import { selectOptionRenderer } from '../SelectOption';
import { SelectSearch } from '../SelectSearch';

interface ISelectModalProps {
  visible: boolean;
  onClose: VoidFunction;
  options: ISelectOption[];
  handleSelect: THandleSelectFn;
  selectedOptions: Map<TSelectValue, ISelectOption>;
}

export const SelectModal: FC<ISelectModalProps> = ({
  visible,
  onClose,
  options,
  handleSelect,
  selectedOptions,
}) => {
  const styles = useStyles(getStyles);
  const colors = useTheme((context) => context.currentTheme.colors);

  const { filteredOptions, setSearchString, searchString } =
    useHandleSelectSearch({ options });

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <SafeAreaView style={styles.safeAreaView}>
        <Pressable style={styles.upperBackdrop} onPress={onClose} />
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.headerCloseButton}
              onPress={onClose}
            >
              <ArrowBackIcon color={colors.primary} />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Typography variant="m-600">Select</Typography>
            </View>
          </View>
          <View style={styles.listContainer}>
            <SelectSearch
              onChange={setSearchString}
              searchString={searchString}
            />
            <FlatList
              style={{ flex: 1 }}
              ListEmptyComponent={<SelectEmpty />}
              data={filteredOptions}
              renderItem={selectOptionRenderer({
                onSelect: handleSelect,
                selectedOptions,
              })}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
