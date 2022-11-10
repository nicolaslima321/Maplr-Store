import React, { createContext } from 'react';
import { UserObject } from '~/types/entities';

type UserState = UserObject;

type StateType = {
  authenticated: boolean,
  user: UserState,
};

type RootStateType = {
  state: StateType,
  setState: React.Dispatch<React.SetStateAction<StateType>>;
};

export const defaultValue = {
  state: {
    authenticated: false,
    user: {
      id: 0,
      avatarImage: '',
      name: '',
      email: '',
      login: '',
      orders: [],
    }
  },
  setState: () => {},
};

export const Context = createContext<RootStateType>(defaultValue);
