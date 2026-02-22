const express = require('express');
const app = express();
const { exec } = require('child_process');

app.get('/ping', (req, res) => {
    // Vulnerability: Command Injection
    const ip = req.query.ip;
    exec('ping -c 4 ' + ip, (err, stdout, stderr) => {
        if (err) {
            return res.send('Error');
        }
        res.send(stdout);
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
