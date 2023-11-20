import React from "react";
import { Layout } from "antd";
import AntdHeader from "../../components/common/Header/Header";
import AntdContent from "../../components/common/Content/Content";
import AntdFooter from "../../components/common/Footer/Footer";
import { Outlet } from "react-router-dom";
import AntdMenu from "../../components/common/Menu/Menu";

const HomeLayout = () => {
  return (
    <Layout className="layout">
      <AntdHeader classnames="flex items-center bg-transparent header">
        <AntdMenu
          mode="vertical"
          classnames="text-[#50d71e] text-center text-[25px] font-medium"
          items={new Array(1).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `Pokemon`,
            };
          })}
        />
      </AntdHeader>
      <AntdContent>
        <Outlet />
      </AntdContent>
      <AntdFooter classnames="text-center text-[#50d71e]">
        Pokemon ©2023 Created by Anjesh
      </AntdFooter>
    </Layout>
  );
};

export default HomeLayout;
