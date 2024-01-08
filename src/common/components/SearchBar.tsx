const SearchBar = () => {
  return (
    <div className="cg5st">
      <form className="c4ijw">
        <label htmlFor="job-search" className="cbl3h">
          Search
        </label>
        <input
          id="job-search"
          className="bg-white dark:bg-slate-800 c03gb c3ff8 ctmd2"
          type="search"
          placeholder="Search job title or keyword…"
        />
        <button
          className="cozyg csmh2 c1u8w c2djl"
          type="submit"
          aria-label="Search">
          <svg
            className="ml-3 mr-2 c1bvt cc44c ciz4v czgoy c3wll c7n6y cgmrc cm474"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"></path>
            <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
