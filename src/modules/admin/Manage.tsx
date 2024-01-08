import { Box, Link } from "@chakra-ui/react";
import { Outlet, Link as RouterLink } from "react-router-dom";

const Manage = () => {
  return (
    <>
      <Box my={5}>
        <ul>
          <li>
            <Link>
              <RouterLink to="/admin/manage/events">📢 Évènements</RouterLink>
            </Link>
          </li>
        </ul>
      </Box>
      <Outlet />
    </>
  );
};

export default Manage;
