import React from "react";
import { Layout, Typography } from "antd";

export const Header = () => {
  return (
    <Layout>
      <Layout.Header style={{ position: "fixed", zIndex: 2, width: "100%" }}>
        <Typography.Text
          style={{ color: "#d3e3f5", fontSize: "32px", float: "left" }}
        >
          Filmograph
        </Typography.Text>
      </Layout.Header>
    </Layout>
  );
};
