const FundTableRow = ({ item, index }) => {
  return (
    <tr className="bg-base-200">
      <th>{index + 1}</th>
      <td>{item?.name}</td>
      <td>{item?.email}</td>
      <td>{item?.transactionId}</td>
      <td>{item?.amount} $</td>
    </tr>
  );
};

export default FundTableRow;
