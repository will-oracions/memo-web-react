import { useForm } from "react-hook-form";
import { VersesFilterDto } from "./VersesFilterForm.type";
import { BuildFormUI, FormMeta } from "../../../common/CustomForms";
import versesFilterFormMeta from "./VersesFilterFormMeta";
import { buildChapterSelectOptions } from "../../helper";
import { ALL_BIBLE_BOOKS } from "../BooksList";
import React from "react";
import { useNavigate } from "react-router-dom";

const VersesFilterForm = () => {
  const [formMeta, setFormMeta] =
    React.useState<FormMeta[]>(versesFilterFormMeta);
  const rhf = useForm();
  const { watch } = rhf;

  const navigate = useNavigate();

  React.useEffect(() => {
    const changedBookSlug = watch(versesFilterFormMeta[0].name);
    // console.log("new Value: ", changedBookSlug);
    if (!changedBookSlug) return;

    const book = ALL_BIBLE_BOOKS.find((book) => book.slug === changedBookSlug);
    const options = buildChapterSelectOptions(book!);

    const fm = [...formMeta];
    fm[1].options = options;
    // console.log("fm: ", fm);
    setFormMeta(fm);
  }, [watch(versesFilterFormMeta[0].name)]);

  // console.log(versesFilterFormMeta[0].name);

  // console.log(buildChapterSelectOptions(NEW_TESTAMENT_BOOKS_LIST[0]));

  const onSubmit = ({ book, chapterNumber }: VersesFilterDto) => {
    // console.log("payload", book, chapterNumber);
    navigate(`/bible/${book}/${chapterNumber}`);
  };

  return (
    <BuildFormUI<VersesFilterDto>
      formHookReturn={rhf}
      formMeta={formMeta}
      onSubmit={onSubmit}
      isLoading={false}
      submitButtonText="Afficher"
    />
  );
};

export default VersesFilterForm;
