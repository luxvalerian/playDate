const router = require('express').Router();
const playdateCtrl = require('../../controllers/playdates');

router.post('/', playdateCtrl.create);


module.exports = router;