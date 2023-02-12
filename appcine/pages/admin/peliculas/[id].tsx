import { useRouter } from "next/router";
import { FC } from "react"

import { PublicLayouts } from '../../../layouts/PublicLayouts';


interface Props {
    ID: string
}

const PeliculaPage = () => {
    const router = useRouter();
    const ID = router.query;
    console.log(ID)
  return (
    <PublicLayouts>
        <h2>Detalle de la Película { ID.id}</h2>
    </PublicLayouts>
    
  )
}

export default PeliculaPage
