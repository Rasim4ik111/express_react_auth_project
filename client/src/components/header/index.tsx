import { Layout, Space, Typography } from "antd";
import styles from "./index.module.css";
import { TeamOutlined } from "@ant-design/icons";
import { CustomButtom } from "../custom-button";
import { Paths } from "../../path";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to={Paths.home}>
          <CustomButtom type="primary">
            <Typography.Title level={1}>Сотрудники</Typography.Title>
          </CustomButtom>
        </Link>
      </Space>
      <Space>
        <Link to={Paths.register}>
          <CustomButtom type="primary">Зарегистрировать</CustomButtom>
        </Link>
        <Link to={Paths.login}>
          <CustomButtom type="primary">Войти</CustomButtom>
        </Link>
      </Space>
    </Layout.Header>
  );
};
