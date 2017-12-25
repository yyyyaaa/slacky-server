export default `
  type Channel {
    id: Int!
    name: String!
    public: Boolean!
    team: Team!
    users: [User!]!
    messages: [Message!]!
  }

  type Mutation {
    createChannel(teamId: Int!, name: String!, public: Boolean=false): Boolean!
  }
`;
