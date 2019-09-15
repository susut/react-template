import React from "react";
import { Form, Icon, Input, Button } from 'antd/es';
import { connect } from "dva";

function Login({ dispatch, login}) {
  function handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();
    dispatch({
      type: 'login/signIn',
      payload: login.user || {}
    })
  }

  function changeInput(e, key) {
    dispatch({
      type: 'login/changeInput',
      payload: {
        key,
        val: e.target.value
      }
    });
  }

  return (<Form layout="inline" onSubmit={handleSubmit}>
    <Form.Item>
      <Input
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        value={login.user.name}
        onChange={(event) => {changeInput(event, 'name')}}
        placeholder="name"
      />
    </Form.Item>
    <Form.Item>
      <Input
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        value={login.user.password}
        onChange={(event) => {changeInput(event, 'password')}}
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

export default connect(({ login }) => ({
  login
}))(Login);
