import { Router } from 'express';
const router = Router();

import { getPosts } from '../controllers/post.controllers';

router.route('/').get(getPosts);

export default router;