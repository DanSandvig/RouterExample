const router = require('express').Router();

router.get('/get', (req, res) => {
    res.send("A badger was got");
});

router.post('/post', (req, res) => {
    res.send("A badger was posted");
});

router.put('/put', (req, res) => {
    res.send("A badger was put(ed?)");
});

router.delete('/delete', (req, res) => {
    res.send("A badger was deleted");
});

module.exports = router;