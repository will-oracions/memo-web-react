import { FormMeta, buildFormMeta } from "../../../common/CustomForms";

const eventFormMeta: FormMeta[] = [
  buildFormMeta({
    type: "text",
    name: "name",
    validation: {
      required: {
        value: true,
        message: "Le nom de la leçon est requis",
      },
    },
  }),
  buildFormMeta({
    name: "description",
    type: "editor",
    validation: {
      required: {
        value: true,
        message: "La description de la leçon est requise",
      },
    },
  }),
  buildFormMeta({
    name: "subjectId",
    type: "select",
    label: "Matière",
    options: [
      { label: "subject1", value: "s1" },
      { label: "subject2", value: "s2" },
    ],
    validation: {
      required: {
        value: true,
        message: "La description de la leçon est requise",
      },
    },
  }),
];
export default eventFormMeta;
