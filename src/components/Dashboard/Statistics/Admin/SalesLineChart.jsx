import { Chart } from "react-google-charts";

// const data = [
//   ["Day", "Funds"],
//   ["9", 1000],
//   ["10", 1170],
//   ["11", 660],
//   ["12", 1030],
// ];

const options = {
  title: "Total Fundings Over Time",
  curveType: "function",
  legend: { position: "bottom" },
  series: [{ color: "#F43F5E" }],
};
const SalesLineChart = ({ chartData }) => {
  return (
    <Chart
      className="rounded-lg overflow-hidden"
      chartType="LineChart"
      width="100%"
      data={chartData}
      options={options}
    />
  );
};

export default SalesLineChart;
