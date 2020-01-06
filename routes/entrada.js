const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('entrada/index');
});

router.post('/add', (req, res) => {

    res.send(req.body.produto + ' teste')

})



module.exports = router