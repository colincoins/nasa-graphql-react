import { gql } from 'apollo-server';

export default gql`
  type Query {
    getApod: APOD
  }
  
  type APOD {
    date: String!
    explanation: String!
    hdurl: String
    media_type: String!
    service_version: String!
    title: String!
    url: String!
  }
`;
