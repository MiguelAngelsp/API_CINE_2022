import { Button } from "@mui/material";
import { NextPage } from "next"
import { MainLayouts } from "../../layouts";
import { usePeliculas } from '../../hooks/usePeliculas';
import { PeliculasList } from '../../components/peliculas/peliculasList';
import { Mundo } from '../../components/Mundo';

//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {
    const { peliculas, isLoading } = usePeliculas('/peliculas');
    const respuesta = usePeliculas('/peliculas');
    console.log(respuesta);
    console.log(isLoading, "c=", peliculas);
    return (
        <MainLayouts>
            <h2>Sección Películas</h2>
            {
                (isLoading)
                    ? <PeliculasList peliculas={peliculas} />
                    : <Mundo />

            }

        </MainLayouts>
    )
}

export default indexPage