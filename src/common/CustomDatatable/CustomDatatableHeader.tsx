import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { CustomDatatableActions, SelectedEntry } from "./CustomDatatable.type";
import { showDatatableActions } from "./helper";
import DatatableLoader from "./DatatableLoader";

interface Props<T> {
  title?: string;
  data: T[];
  count?: number;
  rows: T | SelectedEntry<T>[];
  actions?: CustomDatatableActions<T>[];
  loadingAction?: boolean;
}

const CustomDatatableHeader = <T,>({
  title,
  data,
  count,
  rows,
  actions,
  loadingAction,
}: Props<T>) => {
  return (
    <header className="cx95x ctysv">
      <Flex ml={1}>
        <h2 className="text-slate-800 dark:text-slate-100 cqosy">
          {title || "Data"}{" "}
          <span className="ciz4v czgoy cw92y">{count || data.length}</span>
        </h2>
        <Box ml={2}>{loadingAction && <DatatableLoader />}</Box>
      </Flex>
      {actions && (
        <Box mt={2}>
          <Menu>
            <MenuButton as={Button} size="sm" rightIcon={<ChevronDownIcon />}>
              Actions
            </MenuButton>
            <MenuList>{showDatatableActions<T>(rows, actions)}</MenuList>
          </Menu>
        </Box>
      )}
    </header>
  );
};

export default CustomDatatableHeader;
