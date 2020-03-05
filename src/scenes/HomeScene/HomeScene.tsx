import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { StackNavProp } from '../../types/Navigation';

export default function HomeScreen({ navigation }) {
  let { navigate } = useNavigation<StackNavProp<'Home'>>();
  const state = useNavigationState((state) => state);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Click here to not sending any params when navigate!"
        onPress={() => navigate('Details', { title: '' })}
      />
      <Button
        title="Click here to sending params when navigate!"
        onPress={() =>
          navigate('Details', {
            title: 'H3lL0o',
          })
        }
      />
    </View>
  );
}
