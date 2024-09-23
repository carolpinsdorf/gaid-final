import { Container } from './AgStyled.ts'
import { useState } from 'react';
import Formulario from './Formulario.tsx';
import Detalhes from './Detalhes.tsx';


type Agendamento = {
    servico: string,
    carro: string,
    unidade:string,
    dia: string,
    horario: string,
};

export default function Agendamento(){

    const [agendamento, setAgendamento] = useState<Agendamento | null>(null);
    const [remarcarAgendamento, setRemarcarAgendamento] = useState<Agendamento | null>(null);

    const criarAgendamento = (novoAgendamento: Agendamento) =>{
        setAgendamento(novoAgendamento);
        setRemarcarAgendamento(null);
    };

    const cancelarAgendamento = ()=>{
        setAgendamento(null)
    };

    const remarcar= (agendamentoAtual: Agendamento) =>{
        setRemarcarAgendamento(null);
        setRemarcarAgendamento(agendamentoAtual);
        setAgendamento(agendamentoAtual);
        
    }

    return(
        <Container>
            <div className='box1'>
                <Formulario
                aoCriarAgendamento={criarAgendamento}
                agendamentoExistente={remarcarAgendamento}/>
                {agendamento && (
                    <Detalhes
                    agendamento={agendamento}
                    aoCancelar={cancelarAgendamento}
                    aoRemarcar={remarcar}
                    />
                )}
            </div>
        </Container>
    )
}