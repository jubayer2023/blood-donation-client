import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
// const dateFormat = "YYYY-MM-DD";

const disableDate = (current) => {
  const todaty = dayjs().startOf("day");
  return current && current.isBefore(todaty);
};
const SelectDate = ({ handleDateChange }) => (
  <Space direction="vertical">
    <DatePicker
      required
      onChange={handleDateChange}
      disabledDate={disableDate}
    />
  </Space>
);
export default SelectDate;
