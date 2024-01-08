import { FormMeta } from ".";
import { FieldMetaOptions } from "./BaseFormMeta";

export const capitalize = (str: string): string =>
  str
    .split("")
    .map((char, i) => (i === 0 ? char.toLocaleUpperCase() : char))
    .join("");

export const buildFormMetaOptions = <T extends { id: string; name: string }>(
  formMeta: FormMeta[],
  name: string,
  data: T[]
) => {
  return formMeta.map((meta) => {
    if (meta.name === name) {
      const options: FieldMetaOptions[] = data.map((item) => ({
        label: item.name,
        value: item.id,
      }));
      return { ...meta, options };
    }
    return meta;
  });
};
