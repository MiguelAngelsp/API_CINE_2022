import useSWR, { SWRConfiguration } from 'swr';
import { IGeneros } from '../interfaces/generos/IGeneros';


export const useGeneros = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IGeneros[]>(`http://localhost:3000/api${url}`, config);
    console.log("data = ", data, error);
    return {
        generos: data || [],
        isLoading: !error && data,
        isError: error
    }
}