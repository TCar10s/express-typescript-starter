import * as diaryService from '../src/services/diary';
import express from 'express';
import request from 'supertest';
import { StatusCodes } from 'http-status-codes';
import { Server } from '../src/classes/server';

let app: express.Application;

beforeAll(() => {
  app = new Server().app;
});

describe('diaryService', () => {
  it('should find diary from id ', () => {
    const result = diaryService.findById(1);
    expect(result).toEqual({
      id: 1,
      date: '2017-01-01',
      weather: 'rainy',
      visibility: 'poor',
    });
  });
});

describe('status integration tests', () => {
  it('should return 200 OK', async () => {
    request(app).get('/api/diaries').expect(StatusCodes.OK);
  });
});
