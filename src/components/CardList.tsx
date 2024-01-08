import { Box } from "@chakra-ui/react";
import React from "react";
import Markdown from "react-markdown";
import { CustomButton } from "../common/components";
import { summarize } from "../common/utils";

interface Props {
  title: string;
  content: string;
  url: string;
}

const CardList = ({ title, content }: Props) => {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <div className="bg-white dark:bg-slate-800 shadow-md rounded border border-slate-200 dark:border-slate-700 ctk06">
      {/* Header */}
      <header className="flex cmgwo cxbmt cb7d8 cvavu">
        {/* User */}
        <div className="flex cxbmt cb7d8">
          {/* <img
            className="rounded-full c7n6y"
            src="/images/user-40-04.jpg"
            width="40"
            height="40"
            alt="User 04"
          /> */}
          <div>
            <div className="cdknc">
              <a
                className="text-sm text-slate-800 dark:text-slate-100 cqosy"
                href="#0">
                {title}
              </a>
            </div>
            <div className="text-slate-500 c0qeg">Yesterday at 2:34 PM</div>
          </div>
        </div>
        {/* Menu button */}
        <div className="c4ijw">
          {/* <div
            className="inline-flex csmh2 cke32 cvqv9"
            x-data="{ open: false }">
            <button className="rounded-full czgoy cljes ciz4v coyl7">
              <span className="cbl3h">Menu</span>
              <svg className="c3wll chmgx c6dxj" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="2"></circle>
                <circle cx="10" cy="16" r="2"></circle>
                <circle cx="22" cy="16" r="2"></circle>
              </svg>
            </button>
            <div
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded creyy ct1ew cetne csmh2 c8gb2 cjxbp cke32 c8407 cox8h c5xk8"
              x-show="open"
              x-transition:enter="c5mjj coq4n ch8aq ccio3"
              x-transition:enter-start="opacity-0 c3pue"
              x-transition:enter-end="cqsra cfwq4"
              x-transition:leave="c5mjj coq4n ch8aq"
              x-transition:leave-start="cqsra"
              x-transition:leave-end="opacity-0">
              <ul>
                <li>
                  <a
                    className="text-sm flex cn6r0 cnz6z ch1ih c6w4h cw92y cjm6w cynm4"
                    href="#0">
                    Option 1
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm flex cn6r0 cnz6z ch1ih c6w4h cw92y cjm6w cynm4"
                    href="#0">
                    Option 2
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm flex cvu65 c6tg6 cw92y cjm6w cynm4"
                    href="#0">
                    Remove
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </header>
      {/* Body */}
      {/* <div className="text-sm text-slate-800 dark:text-slate-100 cbfhc cg5st">
        <Markdown>{summarize(content)}</Markdown>
      </div> */}
      {/* Footer */}
      <footer className="flex items-center cwh9k">
        {/* Like button */}
        {/* <button className="flex items-center czqrz cynbf ciz4v czgoy">
          <svg className="c3wll c7n6y c1j9y cgmrc cm474" viewBox="0 0 16 16">
            <path d="M14.682 2.318A4.485 4.485 0 0011.5 1 4.377 4.377 0 008 2.707 4.383 4.383 0 004.5 1a4.5 4.5 0 00-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 014.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 011.785 4.251h-.003z"></path>
          </svg>
          <div className="text-sm text-slate-500 dark:text-slate-400">122</div>
        </button> */}
        {/* Share button */}
        <button className="flex items-center czqrz cynbf ciz4v czgoy">
          <svg className="c3wll c7n6y c1j9y cgmrc cm474" viewBox="0 0 16 16">
            <path d="M13 7h2v6a1 1 0 0 1-1 1H4v2l-4-3 4-3v2h9V7ZM3 9H1V3a1 1 0 0 1 1-1h10V0l4 3-4 3V4H3v5Z"></path>
          </svg>
          <div className="text-sm text-slate-500 dark:text-slate-400">7</div>
        </button>
      </footer>
      {/* Comments */}
      <div className="border-slate-200 dark:border-slate-700 c87xd cggtb czx8a">
        <div className="text-sm">
          <Markdown>{!showMore ? summarize(content) : content}</Markdown>
        </div>
        {/* Comments footer */}
        <Box mt={4}>
          <CustomButton
            // colorScheme="gray"
            onClick={() => setShowMore(!showMore)}>
            Voir {!showMore ? "plus" : "moins"}
          </CustomButton>
        </Box>
      </div>
    </div>
  );
};

export default CardList;
