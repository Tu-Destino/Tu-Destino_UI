import { CreatePost } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


interface Post {
  id: string;
  title: string;
  description: string;
  tags: string;
  urlImg: string;
}



interface tagsBody {
  array: string;
}

export const postApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({
     baseUrl: 'https://tudestinoresourse.coalmd.com/TD/api/v1'
  }),

  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], void>({
      query: () => "/postDiscover",
    }),
    getPostsByTags: builder.mutation<Post[], tagsBody>({
      query: (body) => ({
        url: "/postDiscover/tags",
        method: "POST",
        body: body 
      })
    }),
    createPost: builder.mutation<Post[], CreatePost>({
      query: (body) => ({
        url: "/postDiscover",
        method: "POST",
        body: body 
      })
    })
  }),
}); 

export const { useGetAllPostsQuery, useGetPostsByTagsMutation, useCreatePostMutation} = postApi;
