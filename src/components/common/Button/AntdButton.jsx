import { Button } from "antd";

const AntdButton = ({ classNames, btnText, type, handleOnClickCreate }) => {
  const handleOnClick = (e) => {
    handleOnClickCreate(e);
  };

  return (
    <Button type={type} className={classNames} onClick={handleOnClick}>
      {btnText}
    </Button>
  );
};

export default AntdButton;
