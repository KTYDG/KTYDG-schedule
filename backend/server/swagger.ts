import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: '1.0.0',
    title: 'API for scheduler',
  },
  host: 'localhost:3000',
  schemes: [],
};

const outputFile = './swagger-output.json';
const routes = ['./main.ts'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc).then(async () => {
  await import('./main'); // Your project's root file
});