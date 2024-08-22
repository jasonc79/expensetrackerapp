import express from 'express';
var router = express.Router()

router.get("/", function(req, res) {
    res.send("Testing...")
});

export default router;