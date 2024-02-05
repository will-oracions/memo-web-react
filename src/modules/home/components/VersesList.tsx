import { Verse } from "../models/book.models";

interface Props {
  verses: Verse[];
}

const BooksList = ({ verses }: Props) => {
  const displayBooks = () =>
    verses.map((verse, index) => <div key={index}>{verse.content}</div>);
  return (
    <div>
      <div>{displayBooks()}</div>
    </div>
  );
};

export default BooksList;
