const { Footer } = require("antd/es/layout/layout");

const AntdFooter = (props) => {
  const { classnames, children } = props;
  return <Footer className={classnames}>{children}</Footer>;
};

export default AntdFooter;
