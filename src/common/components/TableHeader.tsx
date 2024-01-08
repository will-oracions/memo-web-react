const TableHeader = () => {
  return (
    <div className="flex items-center cmgwo c958j">
      <div className="text-sm text-slate-500 dark:text-slate-400 clmtf">
        Showing 289 Jobs
      </div>
      {/* Sort */}
      <div className="text-sm">
        <span>Sort by </span>
        <div className="inline-flex c4ijw" x-data="{ open: false }">
          <button
            className="inline-flex justify-center items-center c2djl"
            aria-haspopup="true">
            <div className="flex items-center c32al">
              <span className="text-indigo-500 cw6ke c8xe2 cw92y c32al">
                Newest
              </span>
              <svg
                className="w-3 h-3 text-indigo-400 c3wll c7n6y csib2"
                viewBox="0 0 12 12">
                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"></path>
              </svg>
            </div>
          </button>
          {/* <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded creyy ct1ew cetne csmh2 c8gb2 cke32 c8407 cox8h c5xk8">
            <ul>
              <li>
                <a
                  className="text-sm flex items-center cn6r0 cnz6z ch1ih c6w4h cw92y cjm6w cynm4"
                  href="#0">
                  Oldest
                </a>
              </li>
              <li>
                <a
                  className="text-sm flex items-center cn6r0 cnz6z ch1ih c6w4h cw92y cjm6w cynm4"
                  href="#0">
                  Featured
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
