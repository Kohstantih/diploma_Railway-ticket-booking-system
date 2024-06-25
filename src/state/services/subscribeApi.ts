import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const subscribeApi = createApi({
  reducerPath: 'subscribeApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_API_URL }),
  endpoints: (builder) => ({
    subscribe: builder.mutation({
      query: (email) => ({
        url: 'subscribe',
        params: {
          email: email,
        },
        method: 'POST',
      }),
    }),
  }),
});

export const { useSubscribeMutation } = subscribeApi;
