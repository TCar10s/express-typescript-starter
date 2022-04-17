import express from 'express';
import cors from 'cors';
import diaryRouter from '../routes/diaries';

export class Server {
  private _app;
  private readonly diaryPath = '/api/diaries';

  constructor() {
    this._app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this._app.use(express.json());
    this._app.use(cors());
  }

  private routes() {
    this._app.use(this.diaryPath, diaryRouter);
  }

  public start() {
    this._app.listen(process.env.PORT || 3000, () => {
      // eslint-disable-next-line no-console
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  }

  public get app(): express.Application {
    return this._app;
  }
}
