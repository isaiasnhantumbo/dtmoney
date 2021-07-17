import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">MZN 1.200</td>
            <td>Desenvolvimento</td>
            <td>20/04/2021</td>
          </tr>

          <tr>
            <td>Aluguer</td>
            <td className="withdraw">- MZN 1.200</td>
            <td>Casa</td>
            <td>20/06/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
