import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TSeatsQueryArgs } from 'types/TSeatsQueryArgs';
import { TSeatsRequestObject } from 'types/TSeatsRequestObject';

export const seatsApi = createApi({
  reducerPath: 'seatsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_API_URL }),
  endpoints: (builder) => ({
    getSeats: builder.query<TSeatsRequestObject[], TSeatsQueryArgs>({
      query: ({ id, ...args }) => ({
        url: `routes/${id}/seats`,
        params: {
          ...args,
        },
      }),
    }),
  }),
});

export const { useGetSeatsQuery } = seatsApi;
