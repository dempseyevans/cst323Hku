import { Router } from 'express';
import * as EntriesController from '../entries/entries.controller';

const router = Router();
router
    .route('./entries/update')
    .put(EntriesController.updateEntry);
router
    .route('./entries/delete')
    .delete(EntriesController.deleteEntry);

export default router;