const typeDefs = `

  type Book {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type User {
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Auth {
    token: String
    user: User
  }

  input BookInput {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }


  type Query {
    getSingleUser: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: BookInput): User
    deleteBook(bookId: String): User

  }
`;

export default typeDefs;

// type User {
//   _id: ID!
//   username: String!
//   email: String!
//   bookCount: Int
//   savedBooks:[Book]
// }

// type Book {
//   bookId: ID!
//   authors: String!
//   description: String!
//   title: String!
//   image: String!
//   link: String
// }

// input UserInput {
//   username: String!
//   email: String!
//   password: String!
// }

// type Auth {
//   token: ID!
//   user: User
// }

// type Query {
//   users: [User]
//   user(username: String!): User
//   me: User
// }

// type Mutation {
//   addUser(input: UserInput!): Auth
//   login(email: String!, password: String!): Auth
//   removeThought(thoughtId: ID!): Thought
//   removeComment(thoughtId: ID!, commentId: ID!): Thought
// }
// `;