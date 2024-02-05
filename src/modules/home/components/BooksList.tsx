import { Book } from "../models/book.models";

interface Props {
  books: Book[];
}

const BooksList = ({ books }: Props) => {
  const displayBooks = () =>
    books.map((book, index) => <div key={index}>{book.name}</div>);
  return (
    <div>
      <div>{displayBooks()}</div>
    </div>
  );
};

export default BooksList;
