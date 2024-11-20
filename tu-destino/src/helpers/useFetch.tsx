// import { useEffect, useState } from "react"

// export function useFetch(url:string) {
//   const [data, setData] = useState(null)
//   const [loading, setLoading] =  useState<boolean | null>(null);

//   useEffect(()=>{
//     setLoading(true)
//     fetch(url)
//     .then((response)=> response.json())
//     .then((data)=> setData(data))
//     .finally(()=> setLoading(false));
//   }, [])

//   return {data, loading}
// }
