const express = require('express');
const router = express.Router();

router.get('/get', (req, res) => {
    res.send("A fish was got");
});

router.post('/post', (req, res) => {
    res.send("A fish was posted");
});

router.put('/put', (req, res) => {
    res.send("A fish was put(ed?)");
});

router.delete('/delete', (req, res) => {
    res.send("A fish was deleted");
});

module.exports = router;