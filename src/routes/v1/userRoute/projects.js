import { Router } from 'express';
const router = Router();

// GET: List projects for a specific showcase
router.get('/:sc_id', (req, res) => {
  const { sc_id } = req.params;
  res.json({ message: `List projects for showcase ${sc_id}` });
});

// POST: Add new project to a specific showcase (sc_id in body or query)
router.post('/', (req, res) => {
  const { sc_id } = req.body;
  res.json({ message: `Add new project to showcase ${sc_id}` });
});

// PUT: Update a specific project
router.put('/p/:project_id', (req, res) => {
  const { project_id } = req.params;
  res.json({ message: `Update project ${project_id}` });
});

// DELETE: Delete a specific project
router.delete('/p/:project_id', (req, res) => {
  const { project_id } = req.params;
  res.json({ message: `Delete project ${project_id}` });
});

export default router;
