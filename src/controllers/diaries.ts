import { Response, Request } from 'express';
import * as diaryServices from '../services/diaryServices';
import { NewDiaryEntry } from '../types/diary.interfaces';
import toNewDiaryEntry from '../utils';

const getAllDiaries = (_req: Request, res: Response) => {
  return res.status(200).json(diaryServices.getEntriesWithOutSensitiveInfo());
};

const getDiaryById = (req: Request, res: Response) => {
  const diary = diaryServices.findById(+req.params.id);

  return diary ? res.send(diary) : res.redirect('https://http.cat/404');
};

const addDiary = (req: Request, res: Response) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);

    const addedDiaryEntry: NewDiaryEntry =
      diaryServices.addEntry(newDiaryEntry);

    res.status(201).send(addedDiaryEntry);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

const deleteDiary = (req: Request, res: Response) => {
  try {
    const id = +req.params.id;

    diaryServices.deleteEntry(id);

    res.status(200).send(`Diary entry with id ${id} deleted`);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

const updateDiary = (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    const updatedDiaryEntry = toNewDiaryEntry(req.body);

    const diary = diaryServices.findById(id);

    if (!diary) {
      return res.status(404).send('No diary entry found');
    }

    const updatedDiary = diaryServices.updateEntry(id, updatedDiaryEntry);

    return res
      .status(200)
      .json({ message: 'Diary entry updated', updatedDiary });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export default {
  getAllDiaries,
  getDiaryById,
  addDiary,
  deleteDiary,
  updateDiary,
};
