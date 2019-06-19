import fastifySwagger from 'fastify-swagger';
import gql from 'fastify-gql';

import app from './app';
import routes from './routes';
import schema from './schema';
import swagger from './config/swagger';

app.register(fastifySwagger, swagger);

app.register(gql, {
  schema,
  graphiql: true
});

routes.forEach((route, index) => {
  app.route(route);
});

const start = async () => {
  try {
    await app.listen(3000);
    app.swagger();
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
