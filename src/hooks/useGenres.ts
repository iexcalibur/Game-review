import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({data: genres, isLoading: false, error: null});

export default useGenres;








//const useGenres = () => useData<Genre>('/genres');

// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";
// import useData from "./useData";

// export interface Genre {
//     id: number;
//     name: string;
// }

// interface FetchGenresResponse {
//     count: number;
//     results: Genre[];
// }

// const useGenres = () => {
//     const [genres, setGenres] = useState<Genre[]>([]);
//     const [error, setError] = useState('');
//     const [isLoading, setLoading] = useState(false);


//     useEffect(() => {

//         const controller = new AbortController();

//         setLoading(true);
//         apiClient
//             .get<FetchGenresResponse>('/genres', {signal: controller.signal})
//             .then((res) => {
//                 setGenres(res.data.results);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 if (err instanceof CanceledError) return
//                 setError(err.message)
//                 setLoading(false);
//             })

//         return () => controller.abort();
//     },[]);

//     return { genres, error , isLoading };
//}




// export default useGenres;