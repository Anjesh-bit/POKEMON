const { Header } = require("antd/es/layout/layout");

const AntdHeader = (props) => {
  const { classnames, children } = props;
  return <Header className={classnames}>{children}</Header>;
};

export default AntdHeader;
