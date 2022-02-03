const router = require('express').Router();

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});
router.post('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});
router.put('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});
router.delete('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

module.exports = router;

