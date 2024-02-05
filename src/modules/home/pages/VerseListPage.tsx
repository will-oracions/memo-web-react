import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const VerseListPage = () => {
  const { bookSlug, chapterSlug, verseSlug } = useParams();

  return (
    <Box>
      <Heading fontSize="2xl">
        {bookSlug?.toUpperCase()} {chapterSlug} : {verseSlug}
      </Heading>
    </Box>
  );
};

export default VerseListPage;
