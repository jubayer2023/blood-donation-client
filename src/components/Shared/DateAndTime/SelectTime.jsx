import { Space, TimePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import "./AntBtnOk.css";

const SelecetTime = ({ handleTimeChange, previousData }) => {
  const defaultTime = previousData?.donation_time
    ? dayjs(previousData?.donation_time, "h:mm a")
    : null;
  return (
    <Space wrap>
      <TimePicker
        use12Hours
        format="h:mm a"
        defaultValue={defaultTime}
        onChange={handleTimeChange}
        required
      />
    </Space>
  );
};
export default SelecetTime;
