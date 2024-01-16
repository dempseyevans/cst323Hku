import { Router } from 'express';
import * as PromptsController from './prompts.controller';

const router = Router();
router
    .route('/entries/prompts')
    .get(PromptsController.readPrompts);

router
    .route('./entries/prompts/newprompt')
    .post(PromptsController.createPrompt);

export default router;