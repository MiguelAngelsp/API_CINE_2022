import { NextPage } from "next"
import { PublicLayouts } from "../../layouts/PublicLayouts"
import { MainLayouts } from '../../layouts/MainLayouts';

 
//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {
  

  return (
    <MainLayouts>
      <h1>Admin API Cine</h1>
    </MainLayouts>
  )
}

export default indexPage