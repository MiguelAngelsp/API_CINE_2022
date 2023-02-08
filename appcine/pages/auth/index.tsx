import { Button } from "@mui/material";
import { NextPage } from "next"
import { useAuth } from '../../hooks/useAuth';
import { AuthList } from '../../components/auth/authList';
import { Mundo } from '../../components/Mundo';
import { PublicLayouts } from "@/layouts/PublicLayouts";

//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {
    const { auth, isLoading } = useAuth('/auth');
    const respuesta = useAuth('/auth');
    console.log(respuesta);
    console.log(isLoading, "c=", auth);
    return (
        <PublicLayouts>
            <h2>Sección Auth</h2>
            {
                (isLoading)
                    ? <AuthList auth={auth} />
                    : <Mundo />

            }

        </PublicLayouts>
    )
}

export default indexPage
