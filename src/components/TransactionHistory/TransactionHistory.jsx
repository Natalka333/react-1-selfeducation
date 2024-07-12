import PropTypes from 'prop-types';
import {Table, TableRow} from '../TransactionHistory/TransactionHistory.styled'

export default function TransactionHistory({ items }) {
    return (
        <Table>
            <thead>
                <TableRow style={{ backgroundColor: createColor() }}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </TableRow>
            </thead>

            <tbody>
                {
                    items.map(({ id, type, amount, currency }) => {
                        return (
                            <TableRow key={id}
                            style={{ backgroundColor: createColor() }}
                            >
                                <td>{type}</td>
                                <td>{amount}</td>
                                <td>{currency}</td>
                            </TableRow>
                        )
                    })
                }

            </tbody>
        </Table>
    )
}

const createColor = () => {
    const color =
      'rgba(' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      0.2 +
      ')';
    // console.log(color);
    return color;
  };

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
}