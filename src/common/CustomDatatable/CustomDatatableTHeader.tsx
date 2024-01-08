interface Props {
  tableHead?: string[];
  selectAll: boolean;
  handleRowSelectAll: () => void;
  selectable?: boolean;
}

const CustomDatatableTHeader = ({
  tableHead,
  selectable,
  selectAll,
  handleRowSelectAll,
}: Props) => {
  const showTableHead = () => {
    return tableHead?.map((th, thIndex) => (
      <th key={thIndex} className="c626f ccr3m cwqwq ciamg c8o14">
        <div className="cqosy cojuf">{th}</div>
      </th>
    ));
  };

  return (
    <thead className="text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 csx2x cqosy cn1je cw3n3 cz4zt c87xd c0qeg">
      <tr>
        {selectable && (
          <th className="c626f ccr3m cwqwq c63v7 ciamg c8o14">
            <div className="flex items-center">
              <label className="inline-flex">
                <span className="cbl3h">Select all</span>
                <input
                  id="parent-checkbox"
                  className="cybz1"
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleRowSelectAll}
                />
              </label>
            </div>
          </th>
        )}
        {showTableHead()}
      </tr>
    </thead>
  );
};

export default CustomDatatableTHeader;
