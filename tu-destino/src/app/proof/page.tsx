"use client";
import {
  useCreatePostMutation,
  useGetPostsByTagsMutation,
} from "@/redux/apis/postApi";

// import { useGetTodosQuery, useGetTodoQuery } from "@/redux/apis/todosApi";
import { useEffect, useState } from "react";

export default function Proof() {
  const [tags] = useState("Historia"); // Estado para los tags
  const [getPostsByTags, {  }] =
    useGetPostsByTagsMutation();

  const [
    createPost,
    {},
  ] = useCreatePostMutation();

  useEffect(() => {
    getPostsByTags({ array: tags });
    createPost({
      title: "Estoy cansado jefe",
      description: "tengo sueño",
      tags: "Historia,Montaña",
      urlImg:
        "https://i.pinimg.com/564x/11/55/63/1155637807bcd85a87279f2179e2e5a9.jpg",
      place_id: 1,
      user_id: "144d523f-c71c-480d-97c3-c073ecbcb45c",
    });
  }, []);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <>
      <iframe
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Tienda+Arepeto/4.134969,-73.6360104`}
      ></iframe>
    </>
  );
}
