import { Response, Request } from 'express';
import * as diaryService from '../services/diary';
import { NewDiaryEntry } from '../types/diary.interfaces';

const getAllDiaries = (_req: Request, res: Response) => {
  return res.status(200).json(diaryService.getEntriesWithOutSensitiveInfo());
};

const getDiaryById = (req: Request, res: Response) => {
  const diary = diaryService.findById(+req.params.id);

  return diary ? res.send(diary) : res.redirect('https://http.cat/404');
};

const addDiary = (req: Request, res: Response) => {
  try {
    const newDiaryEntry = req.body;

    const addedDiaryEntry: NewDiaryEntry = diaryService.addEntry(newDiaryEntry);

    res.status(201).send(addedDiaryEntry);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

const deleteDiary = (req: Request, res: Response) => {
  try {
    const id = +req.params.id; // Convert string to number

    diaryService.deleteEntry(id);

    res.status(200).send(`Diary entry with id ${id} deleted`);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

const updateDiary = (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    const updatedDiaryEntry = req.body;

    const updatedDiary = diaryService.updateEntry(id, updatedDiaryEntry);

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
