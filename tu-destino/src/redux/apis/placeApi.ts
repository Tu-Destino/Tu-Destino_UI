import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Place {
  address: string,
  btn_url: string,
  details: string,
  enum_type: string,
  information: string,
  coordinates: string,
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
    // baseUrl: 'https://tudestinoresourse.coalmd.com/TD/api/v1'
    baseUrl: 'https://bl-monolith-td.onrender.com/TD/api/v1'
  }), 
  
  endpoints: (builder)=>({

    getPlace: builder.query<Place,string>({
      query: (title) => `/place/findTitle/${title}`
    }),
    getImages: builder.query<string[],string>({
      query: (title) => `/postDiscover/getUrlImg/${title}`
    }),
    getAllPlaces: builder.query<Place[], void>({
      query: () => '/place'
    }),
    getPlaceIdByTitle: builder.query<number, string>({
      query: (title) => `/place/getIdByTitle/${title}`
    })
  })

})

export const {useGetPlaceQuery, useGetImagesQuery, useGetAllPlacesQuery,useGetPlaceIdByTitleQuery}  = placeApi