import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ChaptersListPage = () => {
  const { bookSlug, chapterSlug } = useParams();

  return (
    <Box>
      <Heading fontSize="2xl">
        {bookSlug?.toUpperCase()} {chapterSlug}
      </Heading>
    </Box>
  );
};

export default ChaptersListPage;
