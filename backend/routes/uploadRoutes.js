const express = require('express');
const path = require('path');
const multer = require('multer');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, '..', 'uploads'));
  },
  filename(req, file, cb) {
    const safeName = file.originalname.replace(/[^a-zA-Z0-9.]/g, '-').toLowerCase();
    cb(null, `${Date.now()}-${safeName}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter(req, file, cb) {
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Only JPG, PNG, and WEBP images are allowed'));
    }
    cb(null, true);
  },
});

router.post('/', protect, (req, res) => {
  upload.single('image')(req, res, (error) => {
    if (error) {
      return res.status(400).json({ message: error.message });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'Image file is required' });
    }

    const baseUrl = `${req.protocol}://${req.get('host')}`;
    res.status(201).json({
      imageUrl: `${baseUrl}/uploads/${req.file.filename}`,
      fileName: req.file.filename,
    });
  });
});

module.exports = router;
