const router = require('express').Router();
const playdateCtrl = require('../../controllers/playdates');

router.post('/', playdateCtrl.create);
router.get('/', playdateCtrl.index);


module.exports = router;