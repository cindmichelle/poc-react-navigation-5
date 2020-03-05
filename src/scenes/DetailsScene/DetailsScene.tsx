import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native';
import { StackRouteProp, StackNavProp } from '../../types/Navigation';

export default function DetailsScreen() {
  let { navigate, setOptions } = useNavigation<StackNavProp<'Details'>>();

  let {
    params: { title },
  } = useRoute<StackRouteProp<'Details'>>();

  useFocusEffect(
    useCallback(() => {
      if (title) {
        setOptions({ title });
      }
    }, [title]),
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
