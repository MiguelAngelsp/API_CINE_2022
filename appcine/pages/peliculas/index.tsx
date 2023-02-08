import { Button } from "@mui/material";
import { NextPage } from "next";
import { usePeliculas } from '../../hooks/usePeliculas';
import { PeliculasCardList } from '../../components/peliculas/peliculasCardList';
import { Mundo } from '../../components/Mundo';
import { PublicLayouts } from "@/layouts/PublicLayouts";

//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {
    const { peliculas, isLoading } = usePeliculas('/peliculas');
    const respuesta = usePeliculas('/peliculas');
    console.log(respuesta);
    console.log(isLoading, "c=", peliculas);
    return (
        <PublicLayouts>
            <h2>Sección Películas</h2>
            {
                (isLoading)
                    ? <PeliculasCardList peliculas={peliculas} />
                    : <Mundo />

            }

        </PublicLayouts>
    )
}

export default indexPage