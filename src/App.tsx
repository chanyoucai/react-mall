import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles["app-header"]}>
        {/* top-header */}
        <div className={styles["top-header"]}>
          <div className={styles["inner"]}>
            <Typography.Text>让旅游更幸福</Typography.Text>
            <Button type="primary">注册</Button>
          </div>
        </div>
        <Layout>
          
        </Layout>
      </div>
    </div>
  );
}

export default App;
