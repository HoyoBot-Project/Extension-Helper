import { Avatar, Row, Space, Typography } from 'antd';
import React from 'react';

const Popup = () => {
  return (
    <Space direction="vertical" style={{ width: 250 }}>
      <Row align="middle">
        <Avatar size="large" src="/icon.png" />
        <Typography.Title level={5} style={{ margin: '0px 20px' }}>
          Kuma Extension
        </Typography.Title>
      </Row>
      <Typography.Text type="success">
        This extension support for sync cookies to Kuma Simulators
      </Typography.Text>
    </Space>
  );
};

export default Popup;
