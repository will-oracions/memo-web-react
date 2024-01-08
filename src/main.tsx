import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

import { router } from "./router/router";
import { client } from "./api/apiClient";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// if (__DEV__) {  // Adds messages only in a dev environment
loadDevMessages();
loadErrorMessages();
// }
