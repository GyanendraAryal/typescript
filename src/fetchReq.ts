// import axios, { AxiosResponse } from "axios"


// interface Todo {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// }

// // axios.get("https://example.com")
// // .then((response)=> console.log(response)
// // )

// const fetchData = async () => {
//     try {
//         const response= fetch("https://jsonplaceholder.typicode.com/todos/1")
//         console.log("Todo: ", response);
//         if (!response.ok) {
//             throw new Error(${response.status})
//         }

//         const data:Todo = (await response).json()


//     } catch (error: any) {
//         if (axios.isAxiosError(error)) {
//             console.log(error.message);
//             if (error.response) {
//                 console.log(error.response.status);
//             }
//         }
//     }
// }