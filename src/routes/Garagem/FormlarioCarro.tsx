import React, { useState } from 'react';
import { FormStyled } from "../Agendamento/AgStyled";
import iconCarro from '../../assets/iconAreaDoCliente2 copy.png'

type Carro = {
    placa: string;
    modelo: string;
    marca: string;
    anoFabricacao: string;
};

interface Props {
    aoCriarCarro: (novoCarro: Carro) => void;
    carroExistente?: Carro | null;
}


const FormularioCarro: React.FC<Props> = ({ aoCriarCarro, carroExistente }) => {
    const [placa, setPlaca] = useState(carroExistente?.placa || '');
    const [modelo, setModelo] = useState(carroExistente?.modelo || '');
    const [marca, setMarca] = useState(carroExistente?.marca || '');
    const [anoFabricacao, setAnoFabricacao] = useState(carroExistente?.anoFabricacao || '');
    const [erroPlaca, setErroPlaca] = useState('');
    
    const validarPlaca = (placa: string): boolean => {
        const regexPlaca = /^[A-Z]{3}\d{1}[A-Z0-9]{1}\d{2}$|^[A-Z]{3}-\d{4}$/;
        return regexPlaca.test(placa.toUpperCase());  // Garante que a placa está em maiúsculas
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!validarPlaca(placa)) {
            setErroPlaca("Placa inválida. O formato deve ser 'ABC-1234' ou 'ABC1D23'.");
            return;
        }
        setErroPlaca(''); 
        const novoCarro: Carro = {
            placa,
            modelo,
            marca,
            anoFabricacao,
        };
        aoCriarCarro(novoCarro);
    };

    return (
        <FormStyled onSubmit={handleSubmit}>
            <div className="div-icon-agendamento">
                <img src={iconCarro}  alt="icone " />
            </div>
            <h2>Novo carro</h2>
            
                <label>Placa:</label>
                <input
                    type="text"
                    value={placa}
                    onChange={(e) => setPlaca(e.target.value)}
                    placeholder="Placa"
                    required
                />
                {erroPlaca && <span style={{ color: 'red' }}>{erroPlaca}</span>}
            
            <input
                type="text"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                placeholder="Modelo"
                required
            />
            <input
                type="text"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                placeholder="Marca"
                required
            />
            <input
                type="text"
                value={anoFabricacao}
                onChange={(e) => setAnoFabricacao(e.target.value)}
                placeholder="Ano de Fabricação"
                required
            />
            <button type="submit">Cadastrar Carro</button>
        </FormStyled>
    );
};

export default FormularioCarro;