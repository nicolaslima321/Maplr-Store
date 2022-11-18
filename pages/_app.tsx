import '../styles/globals.css';
import { useCallback, useEffect, useState } from 'react';
import type { AppProps } from 'next/app';

import { RootState } from '~/store';

import { Header } from '~/layouts/Header';
import UserService from '~/services/UserService';

export default function App({ Component, pageProps }: AppProps) {
  const [rootState, setRootState] = useState(RootState.defaultValue.state);

  const fetchUserResources = useCallback(async () => {
    const user = await UserService.loadResources();

    setRootState({
      authenticated: true,
      user: { ...user, orders: [] },
    });
  }, []);

  useEffect(() => {
    fetchUserResources();
  }, [fetchUserResources]);

  return (
    <>
      <RootState.Context.Provider
        value={[rootState, setRootState]}
      >
        <Header />
        <Component {...pageProps} />

        <a>
          { JSON.stringify(rootState) }
        </a>
      </RootState.Context.Provider>
    </>
  );
}
