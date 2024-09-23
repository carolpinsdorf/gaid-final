import { SectAgDetails } from "./AgStyled"

type Agendamento = {
    servico: string;
    carro: string;
    unidade: string;
    dia: string;
    horario: string;
  };

type Props = {
    agendamento : Agendamento;
    aoCancelar: () => void;
    aoRemarcar: (agendamento:Agendamento) => void;
}
const servicoLabels: {[key:string]:string}={
    trocaOleo: 'Troca de oleo',
    limpezaInjetores: 'Limpeza dos bicos injetores',
    alinBalen: 'Alinhamento e balanceamento',
}
const unidadeLabels: {[key:string]:string} = {
    unidade1: 'Vila Olimpia',
    unidade2: 'Itaim Bibi',
}

export default function Detalhes({agendamento, aoCancelar, aoRemarcar} : Props){

    const handleCancel = () => {
        if(window.confirm('Tem certeza que quer cancelar?')){
            aoCancelar();
        }
    }
    const handleRemarcar = () => {
        if (agendamento) {
          aoRemarcar(agendamento);
        }
      };

    return(
        <SectAgDetails>
            <h2>Detalhes do Agendamento</h2>
            <p>{`Serviço: ${servicoLabels[agendamento.servico] || agendamento.servico}`}</p>
            <p>{`Carro: ${agendamento.carro}`}</p>
            <p>{`Unidade: ${unidadeLabels[agendamento.unidade] || agendamento.servico}`}</p>
            <p>{`Dia: ${agendamento.dia}`}</p>
            <p>{`Horário: ${agendamento.horario}`}</p>

            <div className="boxBotoes">
                <button onClick={handleCancel}>Cancelar</button>
                <button onClick={handleRemarcar}>Remarcar</button>
            </div>
        </SectAgDetails>
    )
}