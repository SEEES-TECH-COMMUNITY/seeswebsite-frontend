/* eslint-disable react/prop-types */
import * as React from 'react';
import { type AppType } from "next/dist/shared/lib/utils";
import { Provider } from 'react-redux';
import "@src/styles/globals.css";
import store from '@src/utils/services/store';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
