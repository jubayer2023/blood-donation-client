import { Space, TimePicker } from "antd";
import "./AntBtnOk.css";

const SelecetTime = ({ handleTimeChange }) => (
  <Space wrap>
    <TimePicker
      use12Hours
      format="h:mm a"
      onChange={handleTimeChange}
      required
    />
  </Space>
);
export default SelecetTime;
