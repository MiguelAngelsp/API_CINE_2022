import { PeliculasCardList } from '@/components/peliculas';
import { usePeliculas } from '@/hooks/usePeliculas';
import { PublicLayouts } from '../../layouts/PublicLayouts';


const IndexPeliculasPage = () => {
  const { peliculas, isLoading } = usePeliculas('/peliculas');
  console.log("l=", isLoading, "c=", peliculas);

  return (
    <PublicLayouts>
      <h2>Sección de Peliculas</h2>
      <PeliculasCardList peliculas = {peliculas} />
    </PublicLayouts>
  )
}

export default IndexPeliculasPage;