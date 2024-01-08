import { Link, LinkProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  children: ReactNode;
  to?: string;
} & LinkProps;

const CustomLink = ({ children, to, ...rest }: Props) => {
  return (
    <RouterLink to={to || "#"}>
      <Link as="span" {...rest}>
        {children}
      </Link>
    </RouterLink>
  );
};

export default CustomLink;
