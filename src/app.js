import fastify from 'fastify';
import mongoose from 'mongoose';

const app = fastify({ logger: true });

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

export default app;
