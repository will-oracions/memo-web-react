import { CustomLink } from "../components";

interface Props {
  to: string;
}

const BackButton = ({ to }: Props) => {
  return (
    <div className="crkc7">
      <CustomLink to={to}>
        <span className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 c46uo cm7vt ch1ih c6w4h cjusy cjm6w">
          <svg
            className="mr-2 ciz4v czgoy c3wll"
            width="7"
            height="12"
            viewBox="0 0 7 12">
            <path d="M5.4.6 6.8 2l-4 4 4 4-1.4 1.4L0 6z"></path>
          </svg>
          <span>Back</span>
        </span>
      </CustomLink>
    </div>
  );
};

export default BackButton;
