import { UsuariosList } from "@/components/usuarios/usuariosList";
import { Mundo } from "../../../components";
import { useUsuarios } from "../../../hooks/useUsuarios";
import { MainLayouts } from '../../../layouts/MainLayouts';

const IndexUsuariosPage = () => {

    const { usuarios, isLoading } = useUsuarios('/usuarios');
    console.log("l=", isLoading, "c=", usuarios);
    return (
        <MainLayouts>
            <UsuariosList usuarios={usuarios}/>
        </MainLayouts>
    )

}

export default IndexUsuariosPage;