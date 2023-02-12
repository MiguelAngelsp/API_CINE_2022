import { Mundo } from '../../../components';
import { PeliculasList } from '../../../components/peliculas';
import { usePeliculas } from '../../../hooks/usePeliculas';
import { MainLayouts } from '../../../layouts';

const IndexPeliculasPage = () => {
  const { peliculas, isLoading } = usePeliculas('/peliculas');
  console.log("l=", isLoading, "c=", peliculas);

  return (
    <MainLayouts>
      <h2>Sección de Peliculas</h2>
      <PeliculasList pelicula = {peliculas} />
            {
                (isLoading)
                    ? <PeliculasList pelicula = {peliculas} />
                    : <Mundo />
            }
        </MainLayouts>
  )
}

export default IndexPeliculasPage;