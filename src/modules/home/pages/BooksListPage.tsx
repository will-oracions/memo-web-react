import { Box, Flex, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { ALL_BIBLE_BOOKS } from "../BooksList";

const BooksListPage = () => {
  const { bookSlug } = useParams();
  const book = ALL_BIBLE_BOOKS.find((book) => book.slug === bookSlug);

  const displayChaptersNumber = () =>
    Array.from(Array(book?.chaptersCount).keys()).map((num, index) => {
      const chapterSlug = num + 1;

      return (
        <GridItem key={index}>
          <Flex
            as={Link}
            to={`/bible/${bookSlug}/${chapterSlug}`}
            _hover={{ bgColor: "green.300" }}
            cursor="pointer"
            justifyContent="center"
            align="center"
            bgColor="green.200"
            textAlign="center"
            height={16}>
            {chapterSlug}
          </Flex>
        </GridItem>
      );
    });

  return (
    <Box>
      <Heading fontSize="2xl">{bookSlug?.toUpperCase()}</Heading>

      <SimpleGrid columns={4} gap={2} my={4}>
        {displayChaptersNumber()}
      </SimpleGrid>
    </Box>
  );
};

export default BooksListPage;
