import { useNavigate } from "react-router-dom";

export type CardContentType = {
  icon: React.ReactNode;
  title: string;
  link: string;
};

interface Props {
  card: CardContentType;
}
export const CustomCard = ({ card }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(card.link)}
      style={{ cursor: "pointer" }}
      className="bg-white dark:bg-slate-800 rounded-sm border border-slate-200 dark:border-slate-700 cugyv cv1va c4osb cetne">
      <div className="flex cob4g chmlm crszu ctk06">
        <div className="ci4cg ckut6">
          <div className="inline-flex justify-center items-center rounded-full ce4zx c6vqo c7j98 cck8h cp92t">
            {card.icon}
          </div>
          <h3 className="text-slate-800 dark:text-slate-100 cqosy cs31h ci4cg">
            {card.title}
          </h3>
        </div>
        {/* <div>
          <a className="text-sm text-indigo-500 cuv1l cdi3j cw92y" href="#0">
            Explore -&gt;
          </a>
        </div> */}
      </div>
    </div>
  );
};
