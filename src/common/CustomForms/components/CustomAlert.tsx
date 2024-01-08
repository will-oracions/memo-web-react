import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertProps,
  Box,
  CloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  show?: boolean;
} & AlertProps;

const CustomAlert = ({ children, show, ...rest }: Props) => {
  const {
    isOpen: isVisible,
    onOpen,
    onClose,
  } = useDisclosure({ defaultIsOpen: true });

  React.useEffect(() => {
    if (show === undefined) {
      onOpen();
      return;
    }
    show ? onOpen() : onClose();
  }, [show]);

  return (
    <>
      {isVisible && (
        <Alert status="error" {...rest} pr={10}>
          <AlertIcon />
          <Box>
            {/* <AlertTitle>Success!</AlertTitle> */}
            <AlertDescription>{children}</AlertDescription>
          </Box>
          <CloseButton
            alignSelf="flex-start"
            position="absolute"
            right={1}
            top={1}
            onClick={onClose}
          />
        </Alert>
      )}
    </>
  );
};

export default CustomAlert;
