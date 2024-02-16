import express from 'express'
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger-output.json';

import goal from './routes/goal'
import index from './routes/index'


const app = express()
app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))


app.use("/", index)
app.use("/goal", goal)


app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000/docs`),
)