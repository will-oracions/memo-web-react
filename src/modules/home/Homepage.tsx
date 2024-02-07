import { Box, Heading } from "@chakra-ui/react";
import {
  NEW_TESTAMENT_BOOKS_LIST,
  OLD_TESTAMENT_BOOKS_LIST,
} from "./BooksList";
import BooksList from "./components/BooksList";

const Homepage = () => {
  return (
    <Box>
      <Heading>Livres</Heading>

      <Heading fontSize="2xl" as="h2" my={8}>
        Nouveau testament
      </Heading>
      <Box ml={10}>
        <BooksList books={NEW_TESTAMENT_BOOKS_LIST} />
      </Box>

      <Heading fontSize="2xl" as="h2" my={8}>
        Ancien testament
      </Heading>
      <Box ml={10}>
        <BooksList books={OLD_TESTAMENT_BOOKS_LIST} />
      </Box>
    </Box>
  );
};

export default Homepage;
