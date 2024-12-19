import { useState } from "react";
import { styled } from "styled-components";
import search from './search.png';

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    outline: none;

    &:focus {
        border-color: #9b6bdf; 
    }
`;

const IconoLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px !important;
    height: 38px;
    cursor: pointer;
`;

const CampoTexto = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    
    const handleChange = (e) => {
        setInputValue(e.target.value);
        onSearch(e.target.value); 
    };

   
    const handleSearch = () => {
        onSearch(inputValue); 
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado
                type="text"
                placeholder="¿Qué estás buscando?"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <IconoLupa src={search} alt="ícono de lupa" onClick={handleSearch} />
        </ContainerEstilizado>
    );
};

export default CampoTexto;
