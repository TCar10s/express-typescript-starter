import { CustomValidator } from 'express-validator';
import { findById } from '../../services/diary';
import { Visibility, Weather } from '../../types/diary.enums';

export const isWeather: CustomValidator = (weather: any): boolean => {
  return Object.values(Weather).includes(weather);
};

export const isDate: CustomValidator = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

export const isString: CustomValidator = (string: string): boolean => {
  return typeof string === 'string';
};

export const isVisibility: CustomValidator = (visibility: any): boolean => {
  return Object.values(Visibility).includes(visibility);
};

export const existDiaryById = async (id: string) => {
  const diary = findById(Number(id));
  

  if (!diary) {
    throw new Error('No diary entry found');
  }

  return diary;
};
