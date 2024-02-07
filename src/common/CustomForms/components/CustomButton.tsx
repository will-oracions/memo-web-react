import { Button, ButtonProps, Spinner } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  to?: string;
  isLoading?: boolean;
  children: ReactNode;
} & ButtonProps;

const CustomButton = ({ children, isLoading, to, ...rest }: Props) => {
  // console.log(isLoading);
  const button = (
    <Button
      disabled={isLoading}
      colorScheme={"yellow"}
      variant={"solid"}
      // _disabled={{
      //   opacity: 0.4,
      // }}
      {...rest}>
      {isLoading ? <Spinner /> : children}
    </Button>
  );
  if (!to) return button;
  return <RouterLink to={to}>{button}</RouterLink>;
};

export default CustomButton;
