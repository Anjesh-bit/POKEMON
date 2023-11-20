import { Menu } from "antd";

const AntdMenu = (props) => {
  const { items, classnames } = props;
  return (
    <div>
      <Menu {...props} items={items} className={classnames} />
    </div>
  );
};

export default AntdMenu;
