import { Button } from "@mui/material"
import { NextPage } from "next"
import { MainLayouts } from "../layouts"

const indexPage: NextPage = () => {

  return (
    <MainLayouts>
      <h2>SECCIÓN HOME - API CINE</h2>
      <img src="https://user-images.githubusercontent.com/114055167/207689060-3f97c60d-4907-447f-84fd-daac1fb2d298.png" width="900"
     height="700"></img>
    </MainLayouts>
  )
}

export default indexPage