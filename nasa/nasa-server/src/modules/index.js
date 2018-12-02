import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { makeExecutableSchema } from 'graphql-tools';
import apodSchema from './apod/schema';
import apodResolvers from './apod/resolvers';
import neowsAsteroidSchema from './neowsAsteroid/schema';
import neowsAsteroidResolvers from './neowsAsteroid/resolvers';

const types = [
  apodSchema,
  neowsAsteroidSchema,
];

const resolvers = [
  apodResolvers,
  neowsAsteroidResolvers,
];

const mergedTypes = mergeTypes(types, { all: true });
const mergedResolvers = mergeResolvers(resolvers);

const schema = makeExecutableSchema({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers,
});

export default schema;
