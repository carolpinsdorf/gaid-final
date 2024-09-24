import { AnimatedLeftPanel, AnimatedRightPanel, Container } from './AgStyled.ts'
import { useState } from 'react';
import Formulario from './Formulario.tsx';
import Detalhes from './Detalhes.tsx';
import botaoSaida from '../../assets/iconSair copy.png'

type Agendamento = {
    servico: string,
    carro: string,
    unidade:string,
    dia: string,
    horario: string,
};

export default function Agendamento(){

    const [animate, setAnimate] = useState(false);
    const [agendamento, setAgendamento] = useState<Agendamento | null>(null);
    const [remarcarAgendamento, setRemarcarAgendamento] = useState<Agendamento | null>(null);

    const criarAgendamento = (novoAgendamento: Agendamento) =>{
        setAgendamento(novoAgendamento);
        setRemarcarAgendamento(null);
    };

    const cancelarAgendamento = ()=>{
        setAnimate(true);
        setTimeout(() => {
            setAgendamento(null);
            setAnimate(false); 
        }, 500);
    };

    const remarcar= (agendamentoAtual: Agendamento) =>{
        setRemarcarAgendamento(null);
        setRemarcarAgendamento(agendamentoAtual);
        setAgendamento(agendamentoAtual);
        
    }

    return(
        <Container>
            <div className='box1'>
                <AnimatedLeftPanel animate={animate}>
                    <Formulario
                    aoCriarAgendamento={(ag) =>{
                        setAgendamento(ag);
                        setAnimate(false);
                    }}
                    agendamentoExistente={remarcarAgendamento}
                />

                </AnimatedLeftPanel>
                {agendamento && (
                    <AnimatedRightPanel animate={animate}>
                        <Detalhes
                        agendamento={agendamento}
                        aoCancelar={cancelarAgendamento}
                        aoRemarcar={remarcar}
                        />
                    </AnimatedRightPanel>
                )}
            </div>
            <div className="div-saida">
                <img src={botaoSaida} alt="ícone de saída" />
            </div>
        </Container>
    )
}