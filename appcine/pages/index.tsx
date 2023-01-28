import { Button } from "@mui/material"
import { NextPage } from "next"
import { MainLayouts } from "../layouts"

const indexPage: NextPage = () => {
  // const { clientes, isLoading } = useClientes ('/clientes');
  // console.log(isLoading, "c=", clientes);

  return (
    <MainLayouts>
      <h2>SECCIÓN HOME - API CINE</h2>

    </MainLayouts>
  )
}

export default indexPage