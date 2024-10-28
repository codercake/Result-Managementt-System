const express = require('express');
const Result = require('../models/result');
const multer = require('multer');
const xlsx = require('xlsx');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), async (req, res) => {
    const workbook = xlsx.readFile(req.file.path);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);
    
    for (const entry of data) {
        const result = new Result(entry);
        await result.save();
    }
    res.send('Results uploaded successfully');
});

router.get('/results/:studentId', async (req, res) => {
    const results = await Result.findOne({ studentId: req.params.studentId });
    if (!results) {
        return res.status(404).send('Results not found');
    }
    res.json(results);
});

module.exports = router;
