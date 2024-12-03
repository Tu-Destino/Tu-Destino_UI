import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UUID } from "crypto";

interface Post {
  id: string;
  title: string;
  description: string;
  tags: string;
  urlImg: string;
}

interface createPost {
  title: string;
  description: string;
  place_id: number,
  tags: string;
  urlImg: string;
  user_id: string
}


interface tagsBody {
  array: string;
}

export const postApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://49.13.164.207:8080/TD/api/v1",
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
    createPost: builder.mutation<Post[], createPost>({
      query: (body) => ({
        url: "/postDiscover",
        method: "POST",
        body: body 
      })
    })
  }),
}); 

export const { useGetAllPostsQuery, useGetPostsByTagsMutation, useCreatePostMutation} = postApi;
