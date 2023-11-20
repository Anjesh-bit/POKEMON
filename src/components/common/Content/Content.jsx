import { Content } from "antd/es/layout/layout";

const AntdContent = (props) => {
  const { classNames, children } = props;
  return <Content className={classNames}>{children}</Content>;
};

export default AntdContent;
