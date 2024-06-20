import { Avatar, Button, Form, Input, notification, Row, Space, Typography } from 'antd';
import React from 'react';

import { cookiesGet } from '../../lib/options';

const Options = () => {
  const [form] = Form.useForm();
  const handleGetCookie = async () => {
    const { discordId } = await form.validateFields();
    const cookies = await chrome.cookies.getAll({ domain: '.hoyolab.com' });
    const upload: {
      discordId: string;
      cookies: { [T: string]: string };
    } = {
      discordId,
      cookies: {},
    };
    Object.entries(cookiesGet).forEach(([key, value]) => {
      const cookieFind = cookies.find((cookie) => cookie.name === value);
      upload.cookies[key] = cookieFind?.value || '';
    });
    console.log(upload);

    notification.success({
      message: 'Success',
      description: 'Successfully synced account!',
      duration: 3,
    });
    // const result = await post('/api/syncToken', upload);
    // if (result) {
    //   notification.success({
    //     message: 'Success',
    //     description: 'Successfully synced account!',
    //     duration: 3,
    //   });
    // } else {
    //   notification.error({
    //     message: 'Error',
    //     description: 'Failed to sync account!',
    //     duration: 3,
    //   });
    // }
  };

  return (
    <Space direction="vertical" style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      <Row align="middle">
        <Avatar size="large" src="/icon.png" />
        <Typography.Title type="success" level={3} style={{ margin: '0px 20px' }}>
          HoyoBot Sync Account
        </Typography.Title>
      </Row>
      <Form form={form} style={{ width: 400 }} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item name="discordId" label="Discord ID">
          <Input />
        </Form.Item>
        <Form.Item name="gmail" label="Gmail">
          <Input />
        </Form.Item>
        <Form.Item label="Hoyolab Acount">
          <Input value="Monsieur Kuma" disabled />
        </Form.Item>
      </Form>
      <Button type="primary" onClick={handleGetCookie}>
        Sync Account
      </Button>
    </Space>
  );
};

export default Options;
