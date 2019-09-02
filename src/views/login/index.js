import React from "react";
import { Form, Icon, Input, Button } from 'antd/es';
import { routerRedux } from 'dva/router';

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (<Form layout="inline" onSubmit={this.handleSubmit}>
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="name"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
      </Button>
      </Form.Item>
    </Form>)
  }
}

export default Login;