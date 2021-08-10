import { Container } from './styles';

import incomeImg from '../../assets/incomeImg.svg';
import outcomeImg from '../../assets/outcomeImg.svg';
import totalImg from '../../assets/totalImg.svg';

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>- R$500,00</strong>
            </div>

            <div className="highlighted-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    );
}
