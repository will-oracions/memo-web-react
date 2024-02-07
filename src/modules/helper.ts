import { FieldMetaOptions } from "../common/CustomForms/BaseFormMeta";
import { ALL_BIBLE_BOOKS } from "./home/BooksList";
import { Book } from "./home/models/book.models";

export const buildBookSelectOptions = (): FieldMetaOptions[] => {
  return ALL_BIBLE_BOOKS.map((book) => ({
    label: book.name_fr,
    value: book.slug,
  }));
};

export const buildChapterSelectOptions = (book: Book): FieldMetaOptions[] => {
  return Array.from(Array(book.chaptersCount).keys()).map((num) => {
    const chapterNumber = num + 1;
    return {
      label: chapterNumber.toString(),
      value: chapterNumber.toString(),
    };
  });
};
