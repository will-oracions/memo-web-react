import { FormMeta, buildFormMeta } from "../../../common/CustomForms";
import { buildBookSelectOptions } from "../../helper";

const versesFilterFormMeta: FormMeta[] = [
  buildFormMeta({
    type: "select",
    name: "book",
    label: "Livre",
    options: buildBookSelectOptions(),
    validation: {
      required: {
        value: true,
        message: "Veuillez choisir un livre.",
      },
    },
  }),
  buildFormMeta({
    type: "select",
    name: "chapterNumber",
    label: "Chapitre",
    options: [
      {
        label: "chap 1",
        value: "chap_1",
      },
    ],
    validation: {
      required: {
        value: true,
        message: "Veuillez choisir un chapitre.",
      },
    },
  }),
];

export default versesFilterFormMeta;
