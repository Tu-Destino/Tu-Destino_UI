
// function getSuspender(promise: Promise<any>) {
//   let status = "pending";
//   let response: any;

//   const suspender = promise.then(
//     (res) => {
//       status = "success";
//       response = res;
//     },
//     (err) => {
//       status = "error";
//       response = err;
//     }
//   );

//   const read = () => {
//     switch (status) {
//       case "pending":
//         throw suspender;
//       case "success":
//         console.log(typeof(response));        
//         throw response;

//       case "error":
//         console.log(typeof(response));
//         throw response;
//     }
//   };

//   return {read}
// }

// export function fetchData(url: string) {
//   const promise = fetch(url)
//     .then((response) => response.json())
//     .then((data) => data);

//   return getSuspender(promise);
// }
