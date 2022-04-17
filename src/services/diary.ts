import {
  DiaryEntry,
  NewDiaryEntry,
  NonSensitiveInfoDiaryEntry,
} from '../types/diary.interfaces';
import diaryData from './data/diaries.json';

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (
  id: number
): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);

  if (entry) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { comment, ...rest } = entry;
    return rest;
  }
};

export const getEntriesWithOutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => ({
      id,
      date,
      weather,
      visibility,
    }));
  };

export const addEntry = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary: DiaryEntry = {
    id: diaries.length + 1,
    ...newDiaryEntry,
  };

  diaries.push(newDiary);
  return newDiary;
};

export const deleteEntry = (id: number): void => {
  const index = diaries.findIndex((d) => d.id === id);

  if (index > -1) {
    diaries.splice(index, 1);
  }
};

export const updateEntry = (
  id: number,
  newDiaryEntry: NewDiaryEntry
): NewDiaryEntry => {
  const index = diaries.findIndex((d) => d.id === id);

  if (index > -1) {
    diaries[index] = {
      ...diaries[index],
      ...newDiaryEntry,
    };
  }

  return diaries[index];
};
