import { ApolloServer, gql } from 'apollo-server';
import dotenv from 'dotenv';
import NasaAPI from '../data-sources/nasa';

import mergedMakeExecutableSchema from './modules/index';

dotenv.config();

const server = new ApolloServer({
  schema: mergedMakeExecutableSchema,
  dataSources: () => {
    return {
      nasaAPI: new NasaAPI(),
    };
  },
  cors: {
    origin: 'http://localhost:3000',
    credentials: 'true',
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
