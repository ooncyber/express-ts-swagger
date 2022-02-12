import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import { userRouter } from "./routes/user.router";
import swaggerUi from 'swagger-ui-express';

const PORT = process.env.PORT || 3000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(userRouter);


app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.listen(PORT, () => {
  console.log('http://localhost:'+PORT);
  
});