/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useAppDispatch } from '@src/utils/hooks/useRedux';
import { useGetUserQuery } from '@src/utils/services/ApiService';
import { addUser } from '@src/utils/services/AppSlice';
import React, { useEffect, type FC } from 'react';

export interface IAuthProviderProps {
}

const AuthProvider: FC<IAuthProviderProps> = (props) => {
  const { data } = useGetUserQuery(undefined);
 const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) {
      dispatch(addUser(data.data));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (null);
}
export default AuthProvider;