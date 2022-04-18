import express from 'express';
import diaryController from '../controllers/diaries';
import validateFields from '../middlewares/validateFields';
import {
  validatorExistDiaryById,
  validatorParamIsNumber,
  validatorsNewDiary,
} from '../validators/diary.validators';

const router = express.Router();

router.get('/', diaryController.getAllDiaries);
router.get(
  '/:id',
  [validatorParamIsNumber, validateFields],
  diaryController.getDiaryById
);
router.post('/', validatorsNewDiary, diaryController.addDiary);
router.delete(
  '/:id',
  [validatorExistDiaryById, validatorParamIsNumber, validateFields],
  diaryController.deleteDiary
);
router.put(
  '/:id',
  validatorExistDiaryById,
  validatorParamIsNumber,
  validatorsNewDiary,
  diaryController.updateDiary
);

export default router;
