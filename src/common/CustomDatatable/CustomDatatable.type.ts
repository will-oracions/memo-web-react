import { MenuItemProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export enum TableRowType {
  TEXT,
}

export interface TableRow<T> {
  type: TableRowType;
  dataKey: string;
  url?: string;
  setValue?: (entry: T) => ReactNode;
  setValueContent?: (entry: T) => string;
  setUrlLink?: (value: string) => string;
  tdClass?: string;
  color?: string;
  bold?: boolean | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

export interface CustomDatatableActions<T> {
  label?: string;
  handler: (action: T[]) => void;
  style?: MenuItemProps;
}

export interface SelectedEntry<T> {
  id: string;
  isChecked: boolean;
  value: T;
}
