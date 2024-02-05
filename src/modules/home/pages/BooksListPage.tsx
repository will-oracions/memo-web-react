import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const BooksListPage = () => {
  const { bookSlug } = useParams();

  return (
    <Box>
      <Heading fontSize="2xl">{bookSlug?.toUpperCase()}</Heading>
    </Box>
  );
};

export default BooksListPage;
