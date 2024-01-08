import React from "react";
import {
  CustomDatatableActions,
  SelectedEntry,
  TableRow,
} from "./CustomDatatable.type";
import CustomDatatableHeader from "./CustomDatatableHeader";
import CustomDatatableTBody from "./CustomDatatableTBody";
import CustomDatatableTHeader from "./CustomDatatableTHeader";

interface Props<T> {
  title?: string;
  count?: number;
  tableHead?: string[];
  tableRows: TableRow<T>[];
  selectable?: boolean;
  actions?: CustomDatatableActions<T>[];
  data: T[];
  loadingAction?: boolean;
  onFirstRowColClick?: (entry: T) => void;
  onSelect?: (selected: T[]) => void;
}

const CustomDatatable = <T extends { id: string }>({
  title,
  count,
  tableHead,
  data,
  tableRows,
  selectable,
  actions,
  loadingAction,
  onFirstRowColClick,
  onSelect,
}: Props<T>) => {
  const [rows, setRows] = React.useState<SelectedEntry<T>[]>([
    ...data.map((entry) => ({
      isChecked: false,
      id: entry.id,
      value: entry,
    })),
  ]);
  const [selectAll, setSelectAll] = React.useState(false);

  const handleRowSelectAll = () => {
    const isChecked = !selectAll;
    setSelectAll(isChecked);
    emitSelectedRows(rows.map((row) => ({ ...row, isChecked })));
    setRows(rows.map((row) => ({ ...row, isChecked })));
  };

  const handleRowCheckboxChange = (entry: T) => {
    const id = entry.id;
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, isChecked: !row.isChecked } : row
    );
    emitSelectedRows(updatedRows);
    setRows(updatedRows);
    updatedRows.every((row) => row.isChecked)
      ? setSelectAll(true)
      : setSelectAll(false);
  };

  const emitSelectedRows = (rows: SelectedEntry<T>[]) => {
    if (!onSelect) return;
    const selected: T[] = rows
      .filter((row) => row.isChecked)
      .map((row) => row.value);
    onSelect(selected);
  };

  // console.log(selectAll, rows);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-sm border border-slate-200 dark:border-slate-700 cetne">
      <CustomDatatableHeader
        title={title}
        count={count}
        actions={actions}
        data={data}
        rows={rows}
        loadingAction={loadingAction}
      />

      <div x-data="handleSelect">
        {/* Table */}
        <div className="cjrun">
          <table className="ch1ih c07b2 c3ff8">
            {/* Table header */}
            <CustomDatatableTHeader
              tableHead={tableHead}
              selectable={selectable}
              selectAll={selectAll}
              handleRowSelectAll={handleRowSelectAll}
            />
            {/* Table body */}
            <CustomDatatableTBody
              actions={actions}
              data={data}
              handleRowCheckboxChange={handleRowCheckboxChange}
              rows={rows}
              selectAll={selectAll}
              tableRows={tableRows}
              selectable={selectable}
              onFirstRowColClick={onFirstRowColClick}
            />
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomDatatable;
