import React, { useContext } from 'react';
import { Button } from '@mui/material';

import { RootState } from '~/store';

export default function Home() {
  const [rootState, setRootState] = useContext(RootState.Context);

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setRootState({
          ...rootState,
          authenticated: true
        })}
      >
        Click me
      </ Button>
    </>
  )
}
