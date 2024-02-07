import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { BibleJsonFile } from "../models/book.models";
import { ALL_BIBLE_BOOKS } from "../BooksList";

const VerseListPage = () => {
  const { bookSlug, chapterSlug, verseSlug } = useParams();

  const [bookData, setBookData] = React.useState<BibleJsonFile | null>(null);

  const book = ALL_BIBLE_BOOKS.find((book) => book.slug === bookSlug);

  React.useEffect(() => {
    (async () => {
      const data = await import(
        `../../../assets/bible/lsg/${bookSlug?.toLocaleLowerCase()}.json`
      );
      // console.log("book data", data.name);
      setBookData(data);
    })();
  }, []);

  const displayVersesContent = () => {
    if (!chapterSlug) return <Box>Pas de verse defini.</Box>;

    const versesList = bookData?.verses[chapterSlug as any];

    const versesListContent = versesList
      ? Object.values(versesList as object)
      : [];

    return versesListContent.map((content, index) => {
      const verseNumber = index + 1;
      return (
        <Flex key={index} gap={2} mb={2}>
          <Text>{verseNumber}</Text>
          <Text>{content}</Text>
        </Flex>
      );
    });
  };

  return (
    <Box>
      <Heading fontSize="2xl">
        {book?.name_fr.toUpperCase()} {chapterSlug}
      </Heading>

      <Box py={4}>{displayVersesContent()}</Box>
    </Box>
  );
};

export default VerseListPage;
