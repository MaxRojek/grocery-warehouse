import { Form, Input, Button, Checkbox } from 'antd';

function LoginPage() {
  return (
    <div className="App" style={{ width: 300, margin: "auto", height: '100vh', marginTop: '20px' }}>
      <Form className="login-form">

        <Form.Item>

          <Input

            placeholder="WarehouseID"
          />
        </Form.Item>

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
            <Button type="primary" shape="round" htmlType="submit" className="login-form-button">
              Zaloguj się
            </Button>
          </Form.Item>
        </Form.Item>
      </Form>
    </div>

  );
}

export default LoginPage;