import { Modal } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const AntModal = (props) => {
  return (
    <div className="overflow-hidden">
      <Modal
        title={props.titles}
        open={props?.open}
        footer={false}
        getContainer={false}
        onCancel={props.handleCancel}
        centered={false}
        wrapClassName="custom-modal submodal"
        closeIcon={props.open?.icon || <CloseCircleOutlined size={30} />}
        okButtonProps={{
          className: "bg-main",
        }}
      >
        {props.children}
      </Modal>
    </div>
  );
};

export default AntModal;
