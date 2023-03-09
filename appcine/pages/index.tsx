import { PublicLayouts } from "@/layouts/PublicLayouts"
import { Button } from "@mui/material"
import { NextPage } from "next"


const indexPage: NextPage = () => {

  return (
    <PublicLayouts>
      <h2>SECCIÓN HOME - API CINE</h2>
      <img src="https://assets-global.website-files.com/60a75d8226f3295ecacf9e33/63ee03748ecbcb5c2b076a24_collage_live%20awards%20on%20Astro%202023.jpg" width="1400"
     height="545"></img>
    </PublicLayouts>
  )
}

export default indexPage

