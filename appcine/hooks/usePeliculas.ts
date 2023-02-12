import useSWR, { SWRConfiguration } from 'swr';
import { IPelicula } from '../interfaces/peliculas/IPelicula';


export const usePeliculas = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IPelicula[]>(`http://localhost:3000/api${url}`, config);
    console.log("data = ", data, error);
    return {
        peliculas: data || [],
        isLoading: !error && data,
        isError: error
    }
}