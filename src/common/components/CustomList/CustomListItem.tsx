interface Props {
  item: string;
}

const CustomListItem = ({ item }: Props) => {
  return (
    <li>
      <div className="flex cmgwo">
        <div className="flex items-center ckut6">
          {/* <div className="c4ijw czt1n">
            <img
              className="rounded-full chmgx c6dxj"
              src="./images/user-32-08.jpg"
              width="32"
              height="32"
              alt="User 08"
            />
          </div> */}
          <div className="c32al">
            <span className="text-sm text-slate-800 dark:text-slate-100 cw92y">
              {item}
            </span>
          </div>
        </div>
        {/* <button className="rounded-full coyl7 cljes ciz4v czgoy">
          <span className="cbl3h">Menu</span>
          <svg className="c3wll chmgx c6dxj" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="2"></circle>
            <circle cx="10" cy="16" r="2"></circle>
            <circle cx="22" cy="16" r="2"></circle>
          </svg>
        </button> */}
      </div>
    </li>
  );
};

export default CustomListItem;
