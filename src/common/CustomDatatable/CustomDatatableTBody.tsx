import { Button, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import {
  CustomDatatableActions,
  SelectedEntry,
  TableRow,
} from "./CustomDatatable.type";
import { showDatatableActions } from "./helper";
import { summarize } from "./CustomDatatable.utils";

interface Props<T> {
  data: T[];
  selectable?: boolean;
  selectAll: boolean;
  rows: SelectedEntry<T>[];
  tableRows: TableRow<T>[];
  handleRowCheckboxChange: (entry: T) => void;
  actions?: CustomDatatableActions<T>[];
  onFirstRowColClick?: (entry: T) => void;
}
const CustomDatatableTBody = <T,>({
  handleRowCheckboxChange,
  actions,
  tableRows,
  data,
  selectable,
  selectAll,
  rows,
  onFirstRowColClick,
}: Props<T>) => {
  const displayRow = (
    tableRows: TableRow<T>[],
    entry: T & { [key: string]: any }
  ) => {
    const hasRowAction = !!onFirstRowColClick;
    const handleClick = (entry: T, rowIndex: number) => {
      // console.log(rowIndex);
      if (hasRowAction && rowIndex === 0) {
        onFirstRowColClick(entry);
      }
    };

    return tableRows.map((row, rowIndex) => (
      <td
        key={rowIndex}
        className="c626f ccr3m cwqwq ciamg c8o14"
        style={rowIndex === 0 ? { fontWeight: 500 } : {}}>
        {!!row.setValue ? (
          row.setValue(entry)
        ) : (
          <div
            onClick={() => handleClick(entry, rowIndex)}
            className={
              "cojuf"
              // String(entry[row.dataKey]).length > 3 ? "cojuf" : "cob4g"
            }
            style={{
              // ...{ border: "4px solid red" },
              ...(row.color ? { color: row.color } : {}),
              ...(row.bold
                ? {
                    fontWeight:
                      typeof row.bold === "boolean" ? "bold" : row.bold,
                  }
                : {}),
              ...(hasRowAction ? { cursor: "pointer" } : { cursor: "none" }),
            }}>
            <Text>
              {!!row.setValueContent
                ? summarize(row.setValueContent(entry))
                : summarize(entry[row.dataKey])}
            </Text>
          </div>
        )}
      </td>
    ));
  };

  const showData = () => {
    return data.map((entry: T, entryIndex) => {
      return (
        <tr key={entryIndex}>
          {selectable && (
            <td className="c626f ccr3m cwqwq c63v7 ciamg c8o14">
              <div className="flex items-center">
                <label className="inline-flex">
                  <span className="cbl3h">Select</span>
                  <input
                    className="table-item cybz1"
                    type="checkbox"
                    checked={
                      selectAll ||
                      !!rows.find(
                        (row) => row.id === (entry as T & { id: string }).id
                      )?.isChecked
                    }
                    onChange={() => {
                      handleRowCheckboxChange(entry);
                    }}
                  />
                </label>
              </div>
            </td>
          )}

          {displayRow(tableRows, entry as T & { id: string })}

          {!!actions && (
            <td className="c626f ccr3m cwqwq c63v7 ciamg c8o14">
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}>
                  <span className="rounded-full coyl7 cljes ciz4v czgoy">
                    <span className="cbl3h">Menu</span>
                    <svg className="c3wll chmgx c6dxj" viewBox="0 0 32 32">
                      <circle cx="16" cy="16" r="2"></circle>
                      <circle cx="10" cy="16" r="2"></circle>
                      <circle cx="22" cy="16" r="2"></circle>
                    </svg>
                  </span>
                </MenuButton>
                <MenuList>{showDatatableActions<T>(entry, actions)}</MenuList>
              </Menu>
            </td>
          )}
        </tr>
      );
    });
  };

  return <tbody className="text-sm ci5zp ccc5r cxw08">{showData()}</tbody>;
};

export default CustomDatatableTBody;
