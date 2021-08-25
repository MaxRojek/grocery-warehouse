import { FieldValues, UseFormReturn } from "react-hook-form";
import { Card, Col, Row } from "antd";

import { Button } from 'antd';
import { InputText } from "../../../../core/components/InputText/InputText"
import { LoginFormDef } from "./login-form-schema";


type LoginFormProps = {
  submitFunc: () => void;
  formMethods: UseFormReturn<FieldValues & LoginFormDef>;
};

const LoginForm: React.FC<LoginFormProps> = (props) => {

  const { ...formMethods } = props.formMethods;

  const {
    reset,
    watch,
    formState,
    control,
    formState: { errors }
  } = formMethods;

  return <>
    <form onSubmit={props.submitFunc}>

      <Row justify="center" wrap gutter={[16, 40]} >
        <Col style={{ display: 'flex', justifyContent: 'center', maxWidth: '300px' }} xs={24} xl={24}>
          <InputText
            name="username"
            placeholder={"Nazwa"}
            control={control}
          />
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'center', maxWidth: '300px' }} xs={24} xl={24}>
          <InputText
            name="password"
            placeholder={"Hasło"}
            control={control}
          />
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'center' }} xs={24} xl={12}>
          <Button size='large' type="primary" htmlType="submit">Submit</Button>
        </Col>
      </Row>
    </form>

  </>
}

export default LoginForm;