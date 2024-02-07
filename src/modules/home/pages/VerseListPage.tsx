import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { BibleJsonFile } from "../models/book.models";
import { ALL_BIBLE_BOOKS } from "../BooksList";
import Loader from "../../../components/Loader";

const VerseListPage = () => {
  const { bookSlug, chapterSlug } = useParams();

  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [bookData, setBookData] = React.useState<BibleJsonFile | null>(null);

  const book = ALL_BIBLE_BOOKS.find((book) => book.slug === bookSlug);

  console.log("book: ", book?.name_fr, bookData?.verses);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await import(
        `../../../assets/bible/lsg/${bookSlug?.toLocaleLowerCase()}.json`
      );
      // console.log("book data", data.name);
      setBookData(data);
      setIsLoading(false);
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

  const showContent = () => {
    if (isLoading) return <Loader />;
    return <Box py={4}>{displayVersesContent()}</Box>;
  };

  return (
    <Box>
      <Heading fontSize="2xl">
        {book?.name_fr.toUpperCase()} {chapterSlug}
      </Heading>

      {showContent()}
    </Box>
  );
};

export default VerseListPage;
