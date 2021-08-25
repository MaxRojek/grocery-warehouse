import { useForm } from "react-hook-form";
import { login } from "../../../models/Login/login.interface";
import { LoginFormDef } from "../components/LoginForm/login-form-schema";
import LoginForm from "../components/LoginForm/LoginForm";
import { LoginPageLeftWrapper, LoginPageRightWrapper, LoginPageWrapper } from "./LoginPageStyle";

const LoginPage = () => {

  const formMethods = useForm<LoginFormDef>({
    mode: 'onChange',
    // defaultValues: { username: "asd", password: "asd" }
  });

  const { handleSubmit } = formMethods;


  const submit = (formObj: login) => { console.log(formObj) }

  return (
    <LoginPageWrapper>
      <LoginPageLeftWrapper></LoginPageLeftWrapper>
      <LoginPageRightWrapper> <LoginForm submitFunc={handleSubmit(submit)} formMethods={formMethods} />
      </LoginPageRightWrapper>
    </LoginPageWrapper>

  );
}

export default LoginPage;