import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
  }
}
`;

export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
  }
}
`;

export const SAVE_BOOK = gql`
mutation SaveBook($bookData: BookInput) {
  saveBook(bookData: $bookData) {
    email
    password
    savedBooks {
      title
      link
      image
      description
      bookId
      authors
    }
    username
  }
}
`;

export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      username
      email
      savedBooks {
        authors
        description
        title
        image
        link
      }
      bookCount
  }
}
`;
