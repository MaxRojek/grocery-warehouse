import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

function LoginPage() {
  return (
    <div className="App" style={{ width: 400, margin: "auto", height: '100vh' }}>
      <Form className="login-form">
        <Form.Item>

          <Input

            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item>
            <Checkbox>Remember me</Checkbox>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form.Item>
      </Form>
    </div>

  );
}

export default LoginPage;