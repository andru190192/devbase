import React from 'react';
import {Box, Button} from 'native-base';

export interface UserListProps {
  users: {id: number; name: string}[];
  onHandlerUser: (name: string) => string;
}

function UserList({users, onHandlerUser}: UserListProps): JSX.Element {
  return (
    <Box alignItems="center" mt={5}>
      {users.map(user => {
        return (
          <Button key={user.id} my={2} onPress={() => onHandlerUser(user.name)}>
            {user.name}
          </Button>
        );
      })}
    </Box>
  );
}

export default UserList;
