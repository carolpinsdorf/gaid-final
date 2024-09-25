import { useState, useEffect } from "react";
import { FormStyled } from "./AgStyled";
import iconAgendamento from "../../assets/iconAreaDoCliente1 copy.png"

type Agendamento = {
    servico: string;
    carro: string;
    unidade: string;
    dia: string
    horario: string;
};

type Props = {
    aoCriarAgendamento : (agendamento : Agendamento) => void;
    agendamentoExistente?: Agendamento | null;
};

const placaMercosulRegex = /^[a-zA-Z]{3}[0-9][a-zA-Z][0-9]{2}$/;
const placaAntigaRegex = /^[a-zA-Z]{3}[0-9]{4}$/;



export default function Formulario({aoCriarAgendamento, agendamentoExistente}: Props){

    const[servico, setServico] = useState('');
    const[carro, setCarro] = useState('');
    const[unidade, setUnidade] = useState('');
    const[dia, setDia] = useState('')
    const[horario, setHorario] = useState('');

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (agendamentoExistente) {
          setServico(agendamentoExistente.servico);
          setCarro(agendamentoExistente.carro);
          setUnidade(agendamentoExistente.unidade);
          setDia(agendamentoExistente.dia);
          setHorario(agendamentoExistente.horario);
        }
    }, [agendamentoExistente]);

    const validatePlaca = (placa: string): boolean => {
        const placaUpper = placa.toUpperCase();
        return placaMercosulRegex.test(placaUpper) || placaAntigaRegex.test(placaUpper);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (servico && carro && unidade && dia && horario){
            if(validatePlaca(carro)){
                aoCriarAgendamento({servico,carro,unidade,dia,horario})
                setError(null);
            }else{
                setError('Placa inválida. Formato MercoSul ou "ABC1234"')
            }
        }else{
            alert('Preencha todos os campos obrigatorios')
        }
        setServico(""),
        setCarro(""),
        setUnidade("");
        setDia("");
        setHorario("");
    };

    return(
        <FormStyled onSubmit={handleSubmit}>
            <div className="div-icon-agendamento">
                <img src={iconAgendamento} alt="Icone de agendamento" />
            </div>
            <h2>Novo agendamento</h2>
            <input value={carro} onChange={e => setCarro(e.target.value)} placeholder="Placa do carro" />
            {error && <p style = {{color:'red'}}>{error}</p>}
            <select value={servico} onChange={e => setServico(e.target.value)}>
                <option value="">Selecione o serviço</option>
                <option value="trocaOleo">Troca de Óleo</option>
                <option value="limpezaInjetores">Limpeza dos bicos injetores</option>
                <option value="alinBalen">Alinhamento e balanceamento</option>
            </select>
            <select value={unidade} onChange={e => setUnidade(e.target.value)}>
                <option value="">Selecione a unidade</option>
                <option value="unidade1">Vila Olimpia</option>
                <option value="unidade2">Itaim Bibi</option>
            </select>
            <select value={dia} onChange={e => setDia(e.target.value)}>
                <option value="">Selecione a data</option>
                <option value="19/09">19/09</option>
                <option value="20/09">20/09</option>
            </select>
            <select value={horario} onChange={e => setHorario(e.target.value)}>
                <option value="">Selecione o horário</option>
                <option value="09:00">09:00</option>
                <option value="11:00">11:00</option>
                <option value="14:00">14:00</option>
            </select>
            <button type="submit">
                {agendamentoExistente ? 'Remarcar' : 'Agendar'}
            </button>
        </FormStyled>
    )
}