// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface initState {
//   address: string;
//   btn_url: string;
//   details: string;
//   enum_type: string;
//   information: string;
//   link_address: string;
//   phone: string;
//   price: string;
//   rate: number;
//   schedule: string;
//   title: string;
//   vr: string;
//   web: string;
//   isLoading: boolean;
// }

// interface inState {
//   places: initState[];
// }

// const initialState: inState = {
//   places: [],
// };

// export const placesSlice = createSlice({
//   name: "place",
//   initialState,
//   reducers: {
//     startLoadingPlace: (state) => {
//       // state.isLoading = true;
//     },
//     setPlace: (state, action: PayloadAction<{ place: initState }>) => {
//       const { place } = action.payload;
//       state.places.push(place);
//     },
//   },
// });

// export default placesSlice.reducer;
// export const { startLoadingPlace, setPlace } = placesSlice.actions;

// export const placesSlice = createSlice({
//   name: 'place',
//   initialState,
//   reducers: {
//     startLoadingPlace: (state) => {
//       state.isLoading = true;
//     },
//     setPlace: (state, action: PayloadAction<{place: initState }>) => {
//       const {address,btn_url,delink_addresstails,details,enum_type,information,phone,price,rate,schedule,title,vr,web} = action.payload.place
//       state.isLoading = false;
//       state.address = address;
//       state.btn_url= btn_url;
//       state.details= details;
//       state.enum_type= enum_type;
//       state.information= information;
//       state.delink_addresstails= delink_addresstails;
//       state.phone= phone;
//       state.price= price;
//       state.rate= rate;
//       state.schedule= schedule;
//       state.title= title;
//       state.vr= vr;
//       state.web= web;
//     }
//   },
// });
