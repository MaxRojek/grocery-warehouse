import React, { FC } from "react";
import { Input, InputProps } from 'antd';
import { Control, Controller, DeepMap, FieldError, FieldValues } from "react-hook-form";

export interface InputTextProps extends InputProps {
  control: Control<any, object>;
  errors?: DeepMap<any, FieldError>
};

const DEFAULT_NAME = 'text_input';

export const InputText: React.FC<InputTextProps> = props => {
  const { name, placeholder, control, ...rest } = props;

  return (
    <Controller
      render={({ field }) => <Input placeholder={placeholder} {...field} />}
      name={name || DEFAULT_NAME}
      control={control}
      {...rest}
    />
  );
};
