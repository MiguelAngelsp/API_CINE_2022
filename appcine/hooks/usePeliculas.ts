import useSWR, { SWRConfiguration } from 'swr';
import { IPeliculas } from '../interfaces/peliculas/IPeliculas';


export const usePeliculas = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IPeliculas[]>(`http://localhost:3000/api${url}`, config);
    console.log("data = ", data, error);
    return {
        peliculas: data || [],
        isLoading: !error && data,
        isError: error
    }
}