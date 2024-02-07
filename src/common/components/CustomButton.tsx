import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  theme?: "primary" | "secondary";
} & ButtonProps;

const CustomButton = ({ children, theme, ...rest }: Props) => {
  // if (theme === "primary") {
  //   return <button className="btn cfeqx cf1ce ceqwg c3ff8">{children}</button>;
  // } else if (theme === "secondary") {
  //   return (
  //     <button className="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 c46uo cm7vt ch1ih c6w4h c3ff8">
  //       {children}
  //     </button>
  //   );
  // }
  return (
    <Button
      w="full"
      size="sm"
      colorScheme={"yellow"}
      variant={"solid"}
      {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;
