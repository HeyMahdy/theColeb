import { Router } from 'express';



const router = Router();

// GET: List hackathons for a specific showcase
router.get('/:sc_id', (req, res) => {
  const { sc_id } = req.params;
  res.json({ message: `List hackathons for showcase ${sc_id}` });
});

// POST: Add hackathon to a showcase (sc_id expected in body)
router.post('/', (req, res) => {
  const { sc_id } = req.body;
  res.json({ message: `Add hackathon to showcase ${sc_id}` });
});

// PUT: Update a specific hackathon
router.put('/po/:hack_id', (req, res) => {
  const { hack_id } = req.params;
  res.json({ message: `Update hackathon ${hack_id}` });
});

// DELETE: Delete a specific hackathon
router.delete('/po/:hack_id', (req, res) => {
  const { hack_id } = req.params;
  res.json({ message: `Delete hackathon ${hack_id}` });
});

export default router;
