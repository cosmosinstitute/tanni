

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Endpoint to save history
app.post('/save-history', (req, res) => {
    const { task, duration, completedAt } = req.body;
    const historyEntry = `Task: ${task}, Duration: ${Math.floor(duration / 60)} minutes, Completed at: ${completedAt}\n`;
    
    fs.appendFile(path.join(__dirname, 'history.txt'), historyEntry, (err) => {
        if (err) {
            return res.status(500).send('Error saving history.');
        }
        res.send('History saved successfully.');
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
