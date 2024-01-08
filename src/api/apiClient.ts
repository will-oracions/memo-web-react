import {
  ApolloClient,
  DocumentNode,
  InMemoryCache,
  MutationHookOptions,
  NoInfer,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
  useMutation,
  useQuery,
} from "@apollo/client";

const HASURA_URI = import.meta.env.VITE_HASURA_URI;
const HASURA_SECRET = import.meta.env.VITE_HASURA_SECRET;
const API_URI = import.meta.env.VITE_API_URI;

console.log("ccalled", HASURA_SECRET, HASURA_URI, API_URI);

const headers = {
  "x-hasura-access-key": HASURA_SECRET,
};

export const client = new ApolloClient({
  uri: HASURA_URI,
  cache: new InMemoryCache(),
});

export const useCustomQuery = <TData>(
  query: DocumentNode,
  variables?: OperationVariables,
  options?: QueryHookOptions<NoInfer<TData>>
) => {
  return useQuery<TData>(query, {
    context: {
      headers,
    },
    ...options,
    variables,
    // fetchPolicy: "no-cache",
  });
};

export const useCustomMutation = <TData, TVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: MutationHookOptions<NoInfer<TData>, NoInfer<TVariables>>
) => {
  return useMutation<TData, TVariables>(query, {
    context: {
      headers,
      ...options,
    },
  });
};
