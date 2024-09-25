import { SectAgDetails } from "../Agendamento/AgStyled"
import  iconCarro from '../../assets/iconAreaDoCliente2 copy.png'

type Carro = {
    placa: string;
    modelo: string;
    marca: string;
    anoFabricacao: string;
};

interface DetalhesProps {
    carro: Carro;
    aoCancelar: () => void;
    aoEditar: (carro: Carro) => void;
}

const DetalhesCarro: React.FC<DetalhesProps> = ({ carro, aoCancelar, aoEditar }) => {
    return (
        <SectAgDetails>
            <div className="div-icon-calendario">
                <img src={iconCarro}  alt="icone " />
            </div>
            
            <h2>Detalhes do Carro</h2>
            <p>Placa: {carro.placa}</p>
            <p>Modelo: {carro.modelo}</p>
            <p>Marca: {carro.marca}</p>
            <p>Ano de Fabricação: {carro.anoFabricacao}</p>

            <div className="boxBotoes">
            <button onClick={() => aoEditar(carro)}>Editar</button>
            <button onClick={aoCancelar}>Cancelar</button>
            </div>
        </SectAgDetails>
    );
};

export default DetalhesCarro;