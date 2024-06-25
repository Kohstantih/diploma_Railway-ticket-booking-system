import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TCityObject } from 'types/TRouteObject';

export const citiesApi = createApi({
  reducerPath: 'citiesApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_API_URL }),
  endpoints: (builder) => ({
    getCities: builder.query<TCityObject[], string>({
      query: (arg) => ({
        url: 'routes/cities',
        params: {
          name: arg,
        },
      }),
    }),
  }),
});

export const { useGetCitiesQuery } = citiesApi;
