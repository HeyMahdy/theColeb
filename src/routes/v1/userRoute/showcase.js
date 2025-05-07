import { Router } from 'express';
const router = Router();

// GET: Get GitHub/portfolio/LinkedIn links for a user
router.get('/:user_id', (req, res) => {
  const { user_id } = req.params;
  res.json({ message: `Get GitHub/portfolio/LinkedIn for user ${user_id}` });
});

// POST: Create showcase for a user (user_id expected in body)
router.post('/', (req, res) => {
  const { user_id } = req.body;
  res.json({ message: `Create showcase for user ${user_id}` });
});

// PUT: Update showcase for a user
router.put('/s/:user_id', (req, res) => {
  const { user_id } = req.params;
  res.json({ message: `Update showcase for user ${user_id}` });
});

// DELETE: Delete showcase for a user
router.delete('/s/:user_id', (req, res) => {
  const { user_id } = req.params;
  res.json({ message: `Delete showcase for user ${user_id}` });
});

export default router;
