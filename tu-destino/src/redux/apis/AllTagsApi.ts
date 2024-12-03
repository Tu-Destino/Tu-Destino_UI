import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const AllTagsApi= createApi({
  reducerPath: 'AllTags',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://49.13.164.207:8080/TD/api/v1'
  }),
  
  endpoints: (builder)=>({

    getTags: builder.query<string[], void>({
      query: () => '/postDiscover/AllTags'
    })
  })

})

export const { useGetTagsQuery} = AllTagsApi