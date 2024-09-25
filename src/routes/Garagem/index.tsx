import { useState } from 'react';
import { AnimatedLeftPanel, AnimatedRightPanel, Container } from '../Agendamento/AgStyled'
import botaoSaida from '../../assets/iconSair copy.png';
import FormularioCarro from './FormlarioCarro.tsx';
import DetalhesCarro from './DetalhesCarro.tsx';

type Carro = {
    placa: string;
    modelo: string;
    marca: string;
    anoFabricacao: string;
};

export default function CadastroCarro() {
    const [animate, setAnimate] = useState(false);
    const [carro, setCarro] = useState<Carro | null>(null);
    const [editarCarro, setEditarCarro] = useState<Carro | null>(null);

    const criarCarro = (novoCarro: Carro) => {
        setCarro(novoCarro);
        setEditarCarro(null);
        setAnimate(false); // Reseta animação após criar o carro
    };

    const cancelarCadastro = () => {
        setAnimate(true);
        setTimeout(() => {
            setCarro(null);
            setAnimate(false);
        }, 500);
    };

    const editar = (carroAtual: Carro) => {
        setEditarCarro(carroAtual);
        setCarro(carroAtual);
        setAnimate(false); // Reseta animação após editar
    };

    return (
        <Container>
            <div className='box1'>
                <AnimatedLeftPanel animate={animate}>
                    <FormularioCarro
                        aoCriarCarro={criarCarro}
                        carroExistente={editarCarro}
                    />
                </AnimatedLeftPanel>
                {carro && (
                    <AnimatedRightPanel animate={animate}>
                        <DetalhesCarro
                            carro={carro}
                            aoCancelar={cancelarCadastro}
                            aoEditar={editar}
                        />
                    </AnimatedRightPanel>
                )}
            </div>
            <div className="div-saida">
                <img src={botaoSaida} alt="ícone de saída" />
            </div>
        </Container>
    );
}