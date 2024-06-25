import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TRouteObject } from 'types/TRouteObject';

export const lastTicketApi = createApi({
  reducerPath: 'lastTicketApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_API_URL }),
  endpoints: (builder) => ({
    getLastTicket: builder.query<TRouteObject[], string>({
      query: () => ({
        url: 'routes/last',
      }),
    }),
  }),
});

export const { useGetLastTicketQuery } = lastTicketApi;
