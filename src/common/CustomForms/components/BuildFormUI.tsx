import { Box, SimpleGrid, Stack } from "@chakra-ui/react";
import { UseFormReturn } from "react-hook-form";
import CustomButton from "./CustomButton";
import { FormMeta } from "../BaseFormMeta";
import CustomInput from "./CustomInput";

interface Props<TDefaultValues> {
  isLoading?: boolean;
  gridCols?: number;
  submitButtonText?: string;
  formHookReturn: UseFormReturn<any, any, undefined>; //UseFormReturn;
  formMeta: (FormMeta | any)[];
  // children?: ReactNode;
  defaultValues?: TDefaultValues;
  onSubmit: (data: any) => void;
}

export const BuildFormUI = <TDefaultValues,>({
  isLoading,
  gridCols,
  formHookReturn,
  formMeta,
  submitButtonText,
  defaultValues,
  // children,
  onSubmit,
}: Props<TDefaultValues>) => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = formHookReturn;

  // console.log("Default value: ", defaultValues);

  const setDefaultValue = (name: string) => {
    // @ts-ignore
    setValue(name, defaultValues[name]);
  };

  const displayInput = (
    { id, name, type, label, placeholder, validation, options }: FormMeta,
    i: number
  ) => {
    if (defaultValues) {
      setDefaultValue(name);
    }
    return (
      <CustomInput
        w="full"
        key={i}
        name={name}
        type={type}
        options={options}
        // @ts-ignore
        // value={defaultValues ? defaultValues[name] : ""}
        rfh={{
          register,
          control,
          validation,
          errors,
        }}
        label={label}
        controlsProps={{ id, isRequired: !!validation.required }}
        _placeholder={{ color: "gray.500" }}
        placeholder={placeholder}
      />
    );
  };

  // console.log("[build]: isLoading = ", isLoading);

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        {/* <Heading size="md"fontSize={"2xl"}>{title}</Heading> */}

        {/* <Text>{error && (error as any)}</Text> */}
        <SimpleGrid
          columns={{
            base: 1,
            md: gridCols || 1,
          }}
          gap={3}>
          {formMeta.map((meta: FormMeta, i: number) =>
            meta.variant === "CUSTOM" ? (
              <Box key={i}>Not supported yet.</Box>
            ) : (
              displayInput(meta, i)
            )
          )}
        </SimpleGrid>

        {/* {children} */}
        <Stack spacing={6}>
          {/* <Stack
            direction={{ base: "column", sm: "row" }}
            align={"start"}
            justify={"space-between"}>
            <Text color={"blue.500"}>
              <RouterLink to="/auth/password-forgot">
                Forgot password?
              </RouterLink>
            </Text>
          </Stack> */}
          <CustomButton
            isLoading={isLoading}
            type="submit"
            // isLoading={mutation.isLoading}
          >
            {submitButtonText || "Submit"}
          </CustomButton>
        </Stack>
      </Stack>
    </form>
  );
};

export default BuildFormUI;
