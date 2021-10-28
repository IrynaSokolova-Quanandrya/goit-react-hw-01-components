import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";

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
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

// Statistics.defaultProps = {
//   avatar: defaultImg,
// };

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
