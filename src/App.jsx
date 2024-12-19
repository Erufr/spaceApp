import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";
import Galeria from "./components/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer/index.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';


const FondoGradiente = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
  margin-bottom: 50px;
`;

const AppContainer = styled.div`
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos);
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);
  const [query, setQuery] = useState("");

  const alAlternarFavorito = (foto) => {
    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({ ...foto, favorita: !foto.favorita });
    }

    setFotosDeGaleria(
      fotosDeGaleria.map((f) => {
        if (f.id === foto.id) {
          return { ...f, favorita: !f.favorita };
        }
        return f;
      })
    );
  };

  const handleSearch = (query) => {
    setQuery(query);
    const fotosFiltradas = fotos.filter((foto) =>
      foto.titulo.toLowerCase().includes(query.toLowerCase())
    );
    setFotosDeGaleria(fotosFiltradas);
  };

  const handleTagFilter = (tag) => {
    const fotosFiltradas = fotos.filter((foto) =>
      foto.tags.includes(tag.titulo.toLowerCase())
    );
    setFotosDeGaleria(fotosFiltradas);
  };

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera onSearch={handleSearch} />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner
                texto="La galería más completa de fotos del espacio"
                backgroundImage={banner}
              />
              <Galeria
                fotos={fotosDeGaleria}
                alSeleccionarFoto={(foto) => setFotoSeleccionada(foto)}
                alAlternarFavorito={alAlternarFavorito}
                onFilter={handleTagFilter}
              />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom
          foto={fotoSeleccionada}
          alCerrar={() => setFotoSeleccionada(null)}
          alAlternarFavorito={alAlternarFavorito}
        />
      </FondoGradiente>
      <Footer />
    </>
  );
};

export default App;
