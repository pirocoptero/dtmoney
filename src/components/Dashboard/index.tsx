import { Container } from './styles';
import { Summary } from '../Sumary/index';
import { TransactionsTable } from '../TransactionsTable/index';

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    );
}
