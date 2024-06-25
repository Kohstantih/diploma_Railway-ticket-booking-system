import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TRoutesDataObject } from 'types/TRouteObject';
import { TSearchRoutesQueryArgs } from 'types/TSearchRoutesQueryArgs';

export const routesApi = createApi({
  reducerPath: 'routesApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_API_URL }),
  endpoints: (builder) => ({
    getRoutes: builder.query<TRoutesDataObject, TSearchRoutesQueryArgs>({
      query: (args) => ({
        url: 'routes',
        params: {
          ...args,
        },
      }),
    }),
  }),
});

export const { useGetRoutesQuery } = routesApi;
