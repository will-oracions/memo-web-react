import { Box } from "@chakra-ui/react";
import CustomListItem from "./CustomListItem";

interface Props {
  items: string[];
  title: string;
}

const CustomList = ({ items, title }: Props) => {
  const showListItems = () =>
    items.map((item, i) => <CustomListItem key={i} item={item} />);
  return (
    <Box>
      <div className="bg-white dark:bg-slate-800 rounded-sm border border-slate-200 dark:border-slate-700 cetne c3n8s c6q8l ctk06">
        <div className="flex cmgwo cisva cg5st">
          <div className="text-sm text-slate-800 dark:text-slate-100 cqosy">
            {title} ({items.length})
          </div>
          {/* <a className="text-sm text-indigo-500 cuv1l cdi3j cw92y" href="#0">
              View All
            </a> */}
        </div>
        <ul className="cd0mw">{showListItems()}</ul>
      </div>
    </Box>
  );
};

export default CustomList;
