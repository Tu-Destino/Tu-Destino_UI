"use client";
import { useGetPlaceQuery } from "@/redux/apis/placeApi";


// import { useGetTodosQuery, useGetTodoQuery } from "@/redux/apis/todosApi";
import {  useState } from "react";

export default function Proof() {

  const [todoId, setTodoId] = useState("Parque Berrío")
  const {data =[],isLoading: isLoadingTodos} = useGetPlaceQuery(todoId)
  

  return (

    <div className="w-full h-full flex items-center flex-col">
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {isLoadingTodos? "true" : "false" }</span>

      <p>{JSON.stringify(data)}</p>
      <button
      disabled={isLoadingTodos}
      onClick={()=> setTodoId("Bad Burgers")}>
        next
      </button>
    </div>
  );
}
