export enum LoginFormField {
  USERNAME = 'username',
  PASSWORD = 'password',
}

export interface LoginFormDef {
  [LoginFormField.USERNAME]: string | null;
  [LoginFormField.PASSWORD]: string | null;
}