// Import npm libraries
import * as http from 'http';
import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';

// Import Supporting files
import schema from './src/graphql/schema';

// Initialize the app
// Create Express server
const app = express();
const port = process.env.PORT;
const graphqlEndPoint = '/api/prisma/graphql';

// Express access configuration(Access Limit, Cors Definition)
require('events').EventEmitter.defaultMaxListeners = Infinity;
// The GraphQL endpoint
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Cache-Control, Pragma, Origin, Authorization, Content-Type, Content-Disposition, X-Requested-With',
  );
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
  return next();
});
app.use(bodyParser.json({ limit: '1000mb' }));
app.use(bodyParser.urlencoded({ limit: '1000mb', extended: true }));

// Apollo server setup with schema
const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
});
// Start the server
server.applyMiddleware({ app, path: graphqlEndPoint });

// Create apollo server with express
const httpServer = http.createServer(app);

// Listen to http server
httpServer.listen({ port }, () => {
  console.log(`http://localhost:${process.env.PORT}${server.graphqlPath}`);
});
