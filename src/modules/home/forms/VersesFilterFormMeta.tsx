import { FormMeta, buildFormMeta } from "../../../common/CustomForms";

const versesFilterFormMeta: FormMeta[] = [
  buildFormMeta({
    type: "select",
    name: "Livre",
    options: [
      {
        label: "book 1",
        value: "book_1",
      },
    ],
  }),
  buildFormMeta({
    type: "select",
    name: "Chapitre",
    options: [
      {
        label: "chap 1",
        value: "chap_1",
      },
    ],
  }),
];

export default versesFilterFormMeta;
