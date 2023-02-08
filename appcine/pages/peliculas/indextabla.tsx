import { MainLayouts } from '../../layouts/MainLayouts';
import { Mundo } from '../../components';
import { usePeliculas } from '@/hooks/usePeliculas';
import { PeliculasList } from '@/components/peliculas/peliculasList';

const IndexPeliculasPage = () => {
  const { peliculas, isLoading } = usePeliculas('/peliculas');
  console.log("l=", isLoading, "c=", peliculas);

  return (
    <MainLayouts>
      <h2>Sección de Peliculas</h2>
      <PeliculasList peliculas = {peliculas} />
            {
                (isLoading)
                    ? <PeliculasList peliculas = {peliculas} />
                    : <Mundo />
            }
        </MainLayouts>
  )
}

export default IndexPeliculasPage;