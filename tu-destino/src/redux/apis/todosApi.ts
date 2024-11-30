import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const todoApi= createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://jsonplaceholder.typicode.com"
  }), 
  
  endpoints: (builder)=>({

    getTodos: builder.query<Todo[], void>({
      query: () => "/todos"
    }),
    getTodo: builder.query({
      query: (todoId) => `/todos/${todoId}`
    })
  })

})

export const { useGetTodosQuery, useGetTodoQuery} = todoApi