import { RegisterOptions } from "react-hook-form";
import { capitalize } from "./CustomForms.utils";

export type FormInputType =
  | "text"
  | "email"
  | "select"
  | "password"
  | "radio"
  | "checkbox"
  | "link"
  | "textarea"
  | "editor";

export type FormMetaVariant = "BUILD_IN" | "CUSTOM";

export interface FormMeta {
  // For build-in input
  id: string;
  type: FormInputType;
  name: string;
  validation: RegisterOptions;
  placeholder?: string;
  label: string;
  isChecked?: boolean;
  defaultChecked?: boolean;
  value?: string;
  showLabel: boolean;
  options?: FieldMetaOptions[];

  // For custom-input
  variant: FormMetaVariant;
  content?: any;
  //   class,
}

export type FieldMetaOptions = { label: string; value: string };

export const buildFormMeta = ({
  id,
  type,
  name,
  validation,
  placeholder,
  label,
  isChecked,
  defaultChecked,
  value,
  variant,
  content,
  showLabel,
  options,
}: Partial<FormMeta> & { name: string }): FormMeta => {
  return {
    type: type || "text",
    name,
    id: id || name,
    validation: validation || { required: false },
    placeholder,
    label: label || capitalize(name),
    isChecked,
    defaultChecked,
    value,
    variant: variant || "BUILD_IN",
    content,
    showLabel: !!showLabel,
    options,
  };
};

export const FormMetaRow = (formMeta: FormMeta[]) => {
  return formMeta[0];
};

// export class buildFormMetaFactory {
//   private static rowsList: FormMeta[][] = [];

//   static row(rows: FormMeta[]) {
//     const _rowsList = buildFormMetaFactory.rowsList;
//     buildFormMetaFactory.rowsList = [..._rowsList, rows];
//     console.log(buildFormMetaFactory.rowsList);
//     return buildFormMetaFactory;
//   }

//   static build() {
//     return buildFormMetaFactory.rowsList;
//   }
// }
