import { PublicLayouts } from "@/layouts/PublicLayouts";
import { useRouter } from "next/router";
import { FC } from "react"




interface Props {
    ID: string
}

const DetallePage = () => {
    const router = useRouter();
    const ID = router.query;
    console.log(ID)
  return (
    <PublicLayouts>
        <h2>Detalle de la película { ID.id}</h2>
    </PublicLayouts>
    
  )
}

export default DetallePage