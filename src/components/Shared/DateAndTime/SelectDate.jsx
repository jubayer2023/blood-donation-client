import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";

const disableDate = (current) => {
  const todaty = dayjs().startOf("day");
  return current && current.isBefore(todaty);
};

const SelectDate = ({ handleDateChange, previousData }) => {
  const defaultDate = previousData?.donation_date
    ? dayjs(previousData.donation_date || "33/44/55", dateFormat)
    : null;
  return (
    <Space direction="vertical">
      <DatePicker
        required
        defaultValue={defaultDate}
        format={dateFormat}
        onChange={handleDateChange}
        disabledDate={disableDate}
      />
    </Space>
  );
};
export default SelectDate;
