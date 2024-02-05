import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { BibleJsonFile } from "../models/book.models";

const VerseListPage = () => {
  const { bookSlug, chapterSlug, verseSlug } = useParams();

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

  const displayVersesContent = () => {
    if (!chapterSlug) return <Box>No chap</Box>;

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
        {bookSlug?.toUpperCase()} {chapterSlug} : {verseSlug}
      </Heading>

      <Box py={4}>{displayVersesContent()}</Box>
    </Box>
  );
};

export default VerseListPage;
