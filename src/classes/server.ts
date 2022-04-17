import express from 'express';
import cors from 'cors';
import diaryRouter from '../routes/diaries';

export class Server {
  private app;
  private readonly diaryPath = '/api/diaries';

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes() {
    this.app.use(this.diaryPath, diaryRouter);
  }

  public start() {
    this.app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  }
}
