const CustomPagination = () => {
  return (
    <div className="cro1p">
      <div className="flex justify-center">
        <nav className="flex" role="navigation" aria-label="Navigation">
          <div className="mr-2">
            <span className="inline-flex items-center justify-center rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cdfsn cweq2 cyyn9 csq8i cfnh0">
              <span className="cbl3h">Previous</span>
              <wbr />
              <svg className="c3wll cgmrc cm474" viewBox="0 0 16 16">
                <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z"></path>
              </svg>
            </span>
          </div>
          <ul className="inline-flex text-sm czfjh cw92y cl0q9">
            <li>
              <span className="inline-flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-500 c1zl5 cyyn9 cxabk cfnh0">
                1
              </span>
            </li>
            <li>
              <a
                className="inline-flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 chl4j cx1ew ch1ih c1hrc c6w4h cyyn9 cxabk cfnh0"
                href="#0">
                2
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 chl4j cx1ew ch1ih c1hrc c6w4h cyyn9 cxabk cfnh0"
                href="#0">
                3
              </a>
            </li>
            <li>
              <span className="inline-flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 ciz4v czgoy cyyn9 cxabk cfnh0">
                …
              </span>
            </li>
            <li>
              <a
                className="inline-flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 chl4j cx1ew ch1ih c1hrc c6w4h chq8e cyyn9 cxabk cfnh0"
                href="#0">
                9
              </a>
            </li>
          </ul>
          <div className="c9o7o">
            <a
              href="#0"
              className="inline-flex items-center justify-center rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 chl4j cx1ew ch1ih c1hrc c6w4h cyyn9 cl0q9 csq8i cfnh0">
              <span className="cbl3h">Next</span>
              <wbr />
              <svg className="c3wll cgmrc cm474" viewBox="0 0 16 16">
                <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default CustomPagination;
