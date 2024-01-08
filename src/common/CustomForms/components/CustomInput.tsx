import {
  Button,
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlProps,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  Link,
  LinkProps,
  Radio,
  RadioGroup,
  RadioGroupProps,
  RadioProps,
  Select,
  SelectProps,
  Stack,
  StackProps,
  Text,
  TextProps,
  Textarea,
  TextareaProps,
} from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import {
  Control,
  Controller,
  FieldErrors,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { FieldMetaOptions, FormInputType } from "../BaseFormMeta";
import React from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { SimpleMdeReact } from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

type Props = {
  type?: FormInputType;
  name?: string;
  label?: string;
  placeholder?: string;
  controlsProps?: {} & FormControlProps;
  options?: FieldMetaOptions[];
  radioOrientation?: "column" | "row";
  defaultInputValue?: string | boolean;
  radioProps?: RadioProps;
  radioGroupProps?: RadioGroupProps;
  radioStackProps?: StackProps;
  linkURL?: string;
  linkTextProps?: TextProps;
  linkProps?: LinkProps;
  rfh: RFHProps;
  // rfh_register?: UseFormRegister<any>;
} & InputProps &
  CheckboxProps &
  SelectProps &
  TextareaProps;

interface RFHProps {
  register: UseFormRegister<any>;
  validation: RegisterOptions;
  errors: FieldErrors;
  control: Control;
}

const CustomInput = ({
  name,
  type,
  label,
  placeholder,
  controlsProps,
  rfh,
  radioOrientation,
  options: optionsList,
  defaultInputValue,
  radioProps,
  radioGroupProps,
  radioStackProps,
  linkURL,
  linkTextProps,
  linkProps,
  // rfh_register,
  ...rest
}: Props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  let _rfh_register_return;

  const { register, control, validation, errors } = rfh;

  if (register && name) {
    if (validation) {
      _rfh_register_return = register(name, { ...validation });
    } else {
      _rfh_register_return = register(name);
    }
  }

  let inputComponent;

  if (type === "checkbox") {
    inputComponent = (
      <Checkbox
        isInvalid={!!errors[name!]}
        {...rest}
        {..._rfh_register_return}
        defaultChecked={
          typeof defaultInputValue === "boolean" ? defaultInputValue : false
        }>
        {label}
      </Checkbox>
    );
  } else if (type === "select") {
    if (!optionsList) throw new Error("The options is requied for type SELECT");

    inputComponent = (
      <Select
        isInvalid={!!errors[name!]}
        placeholder={placeholder || "Select option"}
        {...rest}
        {..._rfh_register_return}
        defaultValue={defaultInputValue as string}>
        {optionsList?.map(({ label, value }, i) => (
          <option key={i} value={value}>
            {label}
          </option>
        ))}
      </Select>
    );
  } else if (type === "editor") {
    inputComponent = (
      <Controller
        name={name!}
        control={control}
        render={({ field: { onChange, value } }) => (
          <SimpleMdeReact value={value} onChange={onChange} />
        )}
      />
    );
  } else if (type === "radio") {
    inputComponent = (
      // <FormControl isInvalid={true}>
      <Controller
        name={name!}
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            {...radioGroupProps}
            // defaultValue={defaultInputValue as string}
            onChange={onChange}
            value={value}>
            <Stack
              spacing={5}
              {...radioStackProps}
              direction={radioOrientation || "column"}>
              {optionsList?.map(({ label, value }, i) => (
                <Radio {...radioProps} key={i} value={value}>
                  {label}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        )}
      />
      // </FormControl>
    );
  } else if (type === "link") {
    if (!linkURL) throw new Error("The linkURL is requied for type LINK");
    inputComponent = (
      <Text {...linkTextProps}>
        {/* {label} */}
        <Link as={"button"} color={"blue.400"} {...linkProps}>
          &nbsp;
          <RouterLink to={linkURL}>{label}</RouterLink>
        </Link>
      </Text>
    );
  } else if (type === "textarea") {
    inputComponent = (
      <Textarea
        isInvalid={!!errors[name!]}
        {...rest}
        {..._rfh_register_return}
        placeholder={placeholder}
      />
    );
  } else {
    const _toggeble_type = showPassword ? "text" : "password";

    const _component = (
      <Input
        isInvalid={!!errors[name!]}
        {...rest}
        {..._rfh_register_return}
        placeholder={placeholder}
        type={type === "password" ? _toggeble_type : type || "text"}
      />
    );

    if (type === "password") {
      inputComponent = (
        <InputGroup>
          {_component}
          <InputRightElement h={"full"}>
            <Button
              variant={"ghost"}
              onClick={() => setShowPassword((showPassword) => !showPassword)}>
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      );
    } else {
      inputComponent = _component;
    }
  }

  if (type === "link") {
    return inputComponent;
  }

  return (
    <FormControl {...controlsProps}>
      {label && <FormLabel>{label}</FormLabel>}

      {inputComponent}

      {name && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <Text color="red.400" className="errorMsg">
              {message}
            </Text>
          )}
        />
      )}
      {/* <ErrorMessage
        errors={errors}
        name="multipleErrorInput"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      /> */}
    </FormControl>
  );
};

export default CustomInput;
