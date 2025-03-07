export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String
    createdAt: DateTime!
  }

  type UserCount {
    count: BigInt!
    createdAt: DateTime!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
    usersCount(startDate: DateTime, endDate: DateTime): [UserCount!]!
      @requireAuth
  }

  input CreateUserInput {
    email: String!
    name: String
  }

  input UpdateUserInput {
    email: String
    name: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
