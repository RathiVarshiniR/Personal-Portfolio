const express = require('express');
const Project = require('../models/Projects');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

const normalizeProject = (body) => ({
  title: body.title,
  description: body.description,
  image: body.image,
  githubLink: body.githubLink,
  liveLink: body.liveLink,
  technologies: Array.isArray(body.technologies) ? body.technologies : String(body.technologies || '').split(',').map((item) => item.trim()).filter(Boolean),
  featured: body.featured !== false,
});

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ featured: -1, createdAt: -1 });
    res.json(projects);
  } catch {
    res.status(500).json({ message: 'Unable to fetch projects' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch {
    res.status(400).json({ message: 'Invalid project id' });
  }
});

router.post('/', protect, async (req, res) => {
  try {
    const project = await Project.create(normalizeProject(req.body));
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/:id', protect, async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, normalizeProject(req.body), {
      new: true,
      runValidators: true,
    });

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', protect, async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project deleted' });
  } catch {
    res.status(400).json({ message: 'Invalid project id' });
  }
});

module.exports = router;
