import { Box, Input } from "@chakra-ui/react";
import { CustomButton } from "../../common/components";

const Login = () => {
  return (
    <Box>
      <Input placeholder="Login" />
      <Input placeholder="Mot de passe" />
      <CustomButton>Se Connecter</CustomButton>
    </Box>
  );
};

export default Login;
