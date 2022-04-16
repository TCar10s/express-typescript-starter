import express from 'express';
import diaryService from '../controllers/diaries';

const router = express.Router();

router.get('/', diaryService.getAllDiaries);
router.get('/:id', diaryService.getDiaryById);
router.post('/', diaryService.addDiary);
router.delete('/:id', diaryService.deleteDiary);
router.put('/:id', diaryService.updateDiary);

export default router;
