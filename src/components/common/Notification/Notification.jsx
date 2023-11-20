import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { notification } from "antd";

const notifications = (title, message, type) => {
  notification.open({
    message: (
      <span
        style={{
          color:
            type === "success"
              ? "#10c469"
              : type === "error"
              ? "red"
              : "#f2994a",
        }}
      >
        {title}!
      </span>
    ),

    description: message,

    icon:
      type === "success" ? (
        <CheckCircleOutlined style={{ color: "#10c469", marginLeft: "4px" }} />
      ) : type === "error" ? (
        <CloseCircleOutlined style={{ color: "red", marginLeft: "4px" }} />
      ) : (
        <ExclamationCircleOutlined
          style={{ color: "#f2994a", marginLeft: "4px" }}
        />
      ),

    placement: "bottomRight",
  });
};

export default notifications;
