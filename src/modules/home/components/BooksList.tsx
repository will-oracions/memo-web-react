import { Box, Link } from "@chakra-ui/react";
import { Book } from "../models/book.models";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  books: Book[];
}

const BooksList = ({ books }: Props) => {
  const displayBooks = () =>
    books.map((book, index) => (
      <Box key={index}>
        <Link as={RouterLink} to={`/bible/${book.slug}`}>
          {book.name}
        </Link>
      </Box>
    ));
  return (
    <div>
      <div>{displayBooks()}</div>
    </div>
  );
};

export default BooksList;
