const express = require('express');
const fs = require('fs');
const path = require('path'); // Added for path handling
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Improved path handling
});

// Endpoint to read file using callback
app.get('/read-file-callback', (req, res) => {
    fs.readFile(path.join(__dirname, 'example.txt'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file using callback:', err);
            return res.status(500).send('Error reading file using callback');
        }
        res.send(data);
    });
});

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Endpoint to read file using promise with delay
app.get('/read-file-promise', async (req, res) => {
    try {
        // Introduce a 2-second delay
        await delay(2000);

        // Read the file after the delay
        const data = await fs.promises.readFile(path.join(__dirname, 'example.txt'), 'utf8');
        res.send(data);
    } catch (err) {
        console.error('Error reading file using promise:', err);
        res.status(500).send('Error reading file using promise');
    }
});
// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
