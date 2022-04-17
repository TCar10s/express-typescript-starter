import express from 'express';
import diaryController from '../controllers/diaries';

const router = express.Router();

router.get('/', diaryController.getAllDiaries);
router.get('/:id', diaryController.getDiaryById);
router.post('/', diaryController.addDiary);
router.delete('/:id', diaryController.deleteDiary);
router.put('/:id', diaryController.updateDiary);

export default router;
