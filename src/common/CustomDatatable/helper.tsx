import { MenuItem } from "@chakra-ui/react";
import { CustomDatatableActions, SelectedEntry } from "./CustomDatatable.type";

export const showDatatableActions = <T,>(
  row: T | SelectedEntry<T>[],
  actions: CustomDatatableActions<T>[]
) => {
  let selectedEntries: T[];

  if (row instanceof Array) {
    selectedEntries = row.filter((r) => r.isChecked).map((r) => r.value);
  } else {
    selectedEntries = [row];
  }

  return actions?.map((action, key) => (
    <MenuItem
      {...action.style}
      key={key}
      onClick={() =>
        selectedEntries.length > 0 ? action.handler(selectedEntries) : null
      }>
      {action.label}
    </MenuItem>
  ));
};
