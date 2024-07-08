import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TOrderQueryArgs } from 'types/TOrderQueryArgs';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_API_URL }),
  endpoints: (builder) => ({
    sendOrder: builder.mutation<{ status: boolean }, TOrderQueryArgs>({
      query: (args) => ({
        url: 'order',
        params: {
          ...args,
        },
        method: 'POST',
      }),
    }),
  }),
});

export const { useSendOrderMutation } = orderApi;
