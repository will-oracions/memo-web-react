import { Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Chapter } from "../models/book.models";

interface Props {
  chapters: Chapter[];
}

const BooksList = ({ chapters }: Props) => {
  const displayBooks = () =>
    chapters.map((chapter, index) => (
      <Box key={index}>
        <Link
          as={RouterLink}
          to={`/bible/${chapter.book.slug}/${chapter.slug}`}>
          {chapter.name}
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
