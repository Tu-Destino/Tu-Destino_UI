import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const tagsApi= createApi({
  reducerPath: 'tags',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://49.13.164.207:8080/TD/api/v1'
  }),
  
  endpoints: (builder)=>({

    getAllTags: builder.query<string[], void>({
      query: () => '/postDiscover/AllTags'
    })
  })

})

export const { useGetAllTagsQuery } = tagsApi