import React, { useContext, useEffect, useState } from 'react';

import { AccountCircle } from '@mui/icons-material';
import { Avatar } from '@mui/material';

import { RootState } from '~/store';

export const ProfileIcon: React.FC<{}> = () => {
  const [rootState, _setRootState] = useContext(RootState.Context);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { authenticated, user } = rootState;

  useEffect(() => {
    setIsAuthenticated(authenticated);
    alert('im been executed');
  }, [authenticated]);

  const authenticatedAvatar = (
    <>
      <Avatar src={user.avatarImage}/>
      <p>Welcome back {user.name}</p>
    </>
  );

  const defaultAvatar = (
    <>
      <Avatar>
        <AccountCircle />
      </Avatar>

      <p>Click here to sign in/up!</p>
    </>
  );

  return isAuthenticated ? authenticatedAvatar : defaultAvatar;
};
