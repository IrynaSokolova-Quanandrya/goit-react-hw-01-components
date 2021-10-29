import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import TransactionItem from "./TransactionItem";
function TransactionHistory({ items }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr style={{ backgroundColor: "darkturquoise" }}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    })
  ),
};
export default TransactionHistory;
