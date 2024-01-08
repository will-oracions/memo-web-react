import { gql } from "@apollo/client";

export const GET_LIST_QUERY = gql`
  query events {
    events {
      id
      name
      description
      community {
        id
        name
      }
    }
  }
`;

export const CREATE_QUERY = gql`
  mutation ($input: CreateeventInput!) {
    insert_event(createeventInput: $input) {
      id
      createdAt
      updatedAT
      name
      description
      subject {
        id
        name
      }
    }
  }
`;

export const UPDATE_QUERY = gql`
  mutation ($input: UpdateeventInput!) {
    update_event(updateeventInput: $input) {
      id
      name
      description
    }
  }
`;

export const GET_SINGLE_QUERY = gql`
  query ($input: String!) {
    delete_event(id: $input) {
      id
      name
      description
      community {
        id
        name
      }
    }
  }
`;

export const DELETE_SINGLE_QUERY = gql`
  mutation ($input: String!) {
    removeevent(id: $input) {
      id
      name
      description
    }
  }
`;
