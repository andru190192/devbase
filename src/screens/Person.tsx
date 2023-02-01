/* eslint-disable react-hooks/exhaustive-deps */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import axios from 'axios';
import {Avatar, Box, HStack, Text, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';

interface Props extends NativeStackScreenProps<any, any> {}

export const Person = ({route}: Props) => {
  const [user, setUser] = useState<{
    name: string;
    avatar_url: string;
    location: string;
  }>();
  const {userId} = route.params;

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const {data} = await axios.get(`https://api.github.com/users/${userId}`);
    setUser(data);
  };

  return (
    <Box>
      {user && (
        <HStack space={2}>
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
      )}
    </Box>
  );
};
