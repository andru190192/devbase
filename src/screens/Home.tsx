import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Center, Text} from 'native-base';
import React from 'react';
import UserList from '../components/UserList';

export type RootStackParamList = {
  Home: {id: number} | undefined;
};

export const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const githubUsers = [
    {
      id: 1,
      name: 'GrahamCampbell',
    },
    {
      id: 2,
      name: 'fabpot',
    },
    {
      id: 3,
      name: 'weierophinney',
    },
    {
      id: 4,
      name: 'rkh',
    },
    {
      id: 5,
      name: 'josh',
    },
  ];

  return (
    <Center>
      <Text fontSize="xs">Top 5 GitHub Users</Text>
      <Text fontSize="xs">Tap the username to see more information</Text>
      <UserList
        users={githubUsers}
        onHandlerUser={name =>
          navigation.navigate('Person', {
            userId: name,
          })
        }
      />
    </Center>
  );
};
