const router = require('express').Router();
const playdateCtrl = require('../../controllers/playdates');

router.post('/', playdateCtrl.create);
router.get('/', playdateCtrl.index);
router.get('/featured', playdateCtrl.getFeatured);


module.exports = router;