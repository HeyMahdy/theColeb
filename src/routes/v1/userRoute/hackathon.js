import { Router } from 'express';
const router = Router();

// GET: Get collaboration preferences
router.get('/:user_id', (req, res) => {
  const { user_id } = req.params;
  res.json({ message: `Get collaboration preferences for user ${user_id}` });
});

// POST: Create collaboration settings (user_id expected in body or query)
router.post('/', (req, res) => {
  const { user_id } = req.body; // or req.query if passed via query
  res.json({ message: `Create collaboration settings for user ${user_id}` });
});

// PUT: Update collaboration settings
router.put('/u/:user_id', (req, res) => {
  const { user_id } = req.params;
  res.json({ message: `Update collaboration settings for user ${user_id}` });
});

// DELETE: Delete collaboration settings
router.delete('/u/:user_id', (req, res) => {
  const { user_id } = req.params;
  res.json({ message: `Delete collaboration settings for user ${user_id}` });
});

export default router
