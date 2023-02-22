import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Avatar, Box, HStack, Text, VStack} from 'native-base';
import React from 'react';
import {RootStackParams, Screens} from '../navigator/StackNavigator';
import useUser from '../hooks/useUser';

interface Props
  extends NativeStackScreenProps<RootStackParams, Screens.Person> {}

export const Person = ({route}: Props) => {
  const {userId} = route.params;

  const {user, isLoading, isError} = useUser(userId);

  if (isError) {
    return <Text>Ocurrio un error</Text>;
  }

  if (isLoading) {
    return <Text>loading...</Text>;
  }

  return (
    <Box>
      <HStack space="sm" padding={3}>
        <Avatar
          bg="green.500"
          source={{
            uri: `${user.avatar_url}`,
          }}
        />
        <VStack>
          <Text>{user.name}</Text>
          <Text>{user.location}</Text>
        </VStack>
      </HStack>
    </Box>
  );
};
