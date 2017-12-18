export default `
  type User {
    id: Int!
    email: String!
    username: String!
    teams: [Team!]!
  }

  type Team {
    owner: User!
    members: [User!]!
    channels: [Channel!]!
  }

  type Channel {
    id: Int!
    name: String!
    messages: [Message!]!
    public: Boolean!
    team: Team!
    users: [User!]!
  }

  type Message {
    id: Int!
    text: String!
    user: User!
    channel: Channel!
  }

  type Query {
    hi: String
  }
`;
