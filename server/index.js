const express = require('express');
const app = express();

// Test to ensure communication.
app.get('/', (req,res) => {
    res.send({ hey: 'buddy' });
});

// Method to check the current opperating env.
const PORT = process.env.PORT || 5000;
app.listen(PORT);