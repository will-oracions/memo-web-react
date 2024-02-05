import { Chapter } from "../models/book.models";

interface Props {
  chapters: Chapter[];
}

const BooksList = ({ chapters }: Props) => {
  const displayBooks = () =>
    chapters.map((chapter, index) => <div key={index}>{chapter.name}</div>);
  return (
    <div>
      <div>{displayBooks()}</div>
    </div>
  );
};

export default BooksList;
