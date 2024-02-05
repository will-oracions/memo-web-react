import { Box, Flex, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import React from "react";
import { BibleJsonFile } from "../models/book.models";

const ChaptersListPage = () => {
  const { bookSlug, chapterSlug } = useParams();
  // const book = ALL_BIBLE_BOOKS.find((book) => book.slug === bookSlug);

  const [bookData, setBookData] = React.useState<BibleJsonFile | null>(null);

  React.useEffect(() => {
    (async () => {
      const data = await import(
        `../../../assets/bible/lsg/${bookSlug?.toLocaleLowerCase()}.json`
      );
      // console.log("book data", data.name);
      setBookData(data);
    })();
  }, []);

  const displayVersesNumber = () => {
    if (!chapterSlug) return <Box>No chap</Box>;

    const versesList = bookData?.verses[chapterSlug as any];

    const versesCount = versesList
      ? Object.keys(versesList as object).length
      : 0;

    return Array.from(Array.from(Array(versesCount).keys())).map(
      (num, index) => {
        const verseSlug = num + 1;

        return (
          <GridItem key={index}>
            <Flex
              as={Link}
              to={`/bible/${bookSlug}/${chapterSlug}/${verseSlug}`}
              _hover={{ bgColor: "green.300" }}
              cursor="pointer"
              justifyContent="center"
              align="center"
              bgColor="green.200"
              textAlign="center"
              height={16}>
              {verseSlug}
            </Flex>
          </GridItem>
        );
      }
    );
  };

  return (
    <Box>
      <Heading fontSize="2xl">
        {bookSlug?.toUpperCase()} {chapterSlug}
      </Heading>

      <SimpleGrid columns={4} gap={2} my={4}>
        {displayVersesNumber()}
      </SimpleGrid>
    </Box>
  );
};

export default ChaptersListPage;
