import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const tagsApi= createApi({
  reducerPath: 'tags',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://tudestinoresourse.coalmd.com/TD/api/v1'
    baseUrl: 'https://bl-monolith-td.onrender.com/TD/api/v1'
  }),
  
  endpoints: (builder)=>({

    getAllTags: builder.query<string[], void>({
      query: () => '/postDiscover/AllTags'
    })
  })

})

export const { useGetAllTagsQuery } = tagsApi