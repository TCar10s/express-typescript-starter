import { check, param } from 'express-validator';
import validateFields from '../middlewares/validateFields';
import {
  existDiaryById,
  isVisibility,
  isWeather,
} from './customs/diaries-custom-validators';

export const validatorsNewDiary = [
  check('date', 'Date is required')
    .not()
    .isEmpty()
    .isDate()
    .withMessage('Date is not valid (YYYY-MM-DD)'),

  check('weather', 'Weather is required')
    .not()
    .isEmpty()
    .custom(isWeather)
    .withMessage('Weather is not valid (sunny, rainy, cloudy, windy, stormy)'),

  check('visibility', 'Visibility is required')
    .not()
    .isEmpty()
    .custom(isVisibility)
    .withMessage('Visibility is not valid (great, good, ok, poor)'),

  check('comment', 'Comment is required').not().isEmpty(),
  validateFields,
];

export const validatorParamIsNumber = param(
  'id',
  'Id must be a number'
).isInt();

export const validatorExistDiaryById = param(
  'id',
  'Diary entry not found'
).custom(existDiaryById);
