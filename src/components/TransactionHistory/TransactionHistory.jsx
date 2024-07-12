import PropTypes from 'prop-types';
import { Table, TableRow, TableTitle, TableList } from '../TransactionHistory/TransactionHistory.styled'

export default function TransactionHistory({ items }) {
    return (
        <Table>
            <thead>
                <TableRow style={{ backgroundColor: createColor() }}>
                    <TableTitle>Type</TableTitle>
                    <TableTitle>Amount</TableTitle>
                    <TableTitle>Currency</TableTitle>
                </TableRow>
            </thead>

            <tbody>
                {
                    items.map(({ id, type, amount, currency }) => {
                        return (
                            <TableRow key={id}
                                style={{ backgroundColor: createColor() }}
                            >
                                <TableList>{type}</TableList>
                                <TableList>{amount}</TableList>
                                <TableList>{currency}</TableList>
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