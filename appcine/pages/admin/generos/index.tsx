import { Button } from "@mui/material";
import { NextPage } from "next"
import { useGeneros } from "@/hooks/useGeneros";
import { GenerosList } from "@/components/generos/generosList";
import { Mundo } from "@/components";
import { MainLayouts } from "@/layouts/MainLayouts";

//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {
    const { generos, isLoading } = useGeneros('/generos');
    const respuesta = useGeneros('/generos');
    console.log(respuesta);
    console.log(isLoading, "c=", generos);
    return (
        <MainLayouts>
            <h2>Sección Generos</h2>
            {
                (isLoading)
                    ? <GenerosList generos={generos} />
                    : <Mundo />

            }

        </MainLayouts>
    )
}

export default indexPage