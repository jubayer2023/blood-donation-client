import FundTableRow from "./FundTableRow";

const FundTable = ({ payments }) => {
  console.log(payments);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="bg-slate-800 text-amber-700">
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Transaction Id</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {payments.map((item, index) => (
            <FundTableRow key={item?._id} item={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FundTable;
