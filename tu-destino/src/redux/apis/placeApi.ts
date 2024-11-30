import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Place {
  address: string,
  btn_url: string,
  details: string,
  enum_type: string,
  information: string,
  link_address: string,
  phone: string,
  price: string,
  rate: number,
  schedule: string,
  title: string,
  vr: string,
  web: string,
  isLoading:boolean
}


export const placeApi= createApi({
  reducerPath: 'places',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://49.13.164.207:8080/TD/api/v1'
    //  baseUrl: 'https://bl-monolith-td.onrender.com/TD/api/v1'
  }), 
  
  endpoints: (builder)=>({

    getPlace: builder.query<Place,string>({
      query: (title) => `/place/findTitle/${title}`
    }),
    getImages: builder.query<string[],string>({
      query: (title) => `/postDiscover/getUrlImg/${title}`
    })
  })

})

export const {useGetPlaceQuery, useGetImagesQuery} = placeApi