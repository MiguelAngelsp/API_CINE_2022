import { Button } from "@mui/material";
import { NextPage } from "next"
import { MainLayouts } from "../../layouts";
import { useCesta } from '../../hooks/useCesta';
import { CestaList } from '../../components/cesta/cestaList';
import { Mundo } from '../../components/Mundo';

//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {
    const { cesta, isLoading } = useCesta('/cesta');
    const respuesta = useCesta('/cesta');
    console.log(respuesta);
    console.log(isLoading, "c=", cesta);
    return (
        <MainLayouts>
            <h2>Sección Cesta</h2>
            {
                (isLoading)
                    ? <CestaList cesta={cesta} />
                    : <Mundo />

            }

        </MainLayouts>
    )
}

export default indexPage