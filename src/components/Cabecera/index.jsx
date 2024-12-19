import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
   padding: 60px 0;
   display: flex;
   justify-content: space-between;

   img {
      width: 212px;
   }
`;

const Cabecera = ({ onSearch }) => {
    return (
        <HeaderEstilizado>
            <img src="img/logo.png" alt="Logo de Space App" />
            {/* Pasamos la función onSearch como prop a CampoTexto */}
            <CampoTexto onSearch={onSearch} />
        </HeaderEstilizado>
    );
};

export default Cabecera;
