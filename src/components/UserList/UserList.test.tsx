import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {NativeBaseProvider} from 'native-base';
import UserList, {UserListProps} from '../UserList/UserList';

const onHandlerUserMock = jest.fn();

const props: UserListProps = {
  users: [{id: 1, name: 'Andres Guachisaca'}],
  onHandlerUser: onHandlerUserMock,
};

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

describe('', () => {
  test('should render correctly', () => {
    const component = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <UserList {...props} />
      </NativeBaseProvider>,
    );

    const userName = screen.getByText('Andres Guachisaca');

    expect(component).toMatchSnapshot();
    expect(userName).toBeTruthy();
  });

  test('should call onHandlerUser when tap on user', () => {
    render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <UserList {...props} />
      </NativeBaseProvider>,
    );

    const userName = screen.getByText('Andres Guachisaca');
    fireEvent.press(userName);

    expect(onHandlerUserMock).toHaveBeenCalledWith('Andres Guachisaca');
  });
});
