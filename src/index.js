import fastify from 'fastify';
import fastifySwagger from 'fastify-swagger';
import mongoose from 'mongoose';

import routes from './routes';
import swagger from './config/swagger';

const app = fastify({ logger: true });

app.register(fastifySwagger, swagger);

const run = async () => {
  try {
    await mongoose.connect('mongodb://localhost/mycargarage', {
      useNewUrlParser: true
    });
    app.log.info('MongoDB connected…');
  } catch (err) {
    app.log.error(err);
  }
};
run();

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
