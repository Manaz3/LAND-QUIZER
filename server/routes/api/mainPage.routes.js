const router = require('express').Router();
const { Theme, Flash } = require('../../db/models');

router.route('/').get((req, res) => {
  Theme.findAll({ iclude: Flash })
    .then((allTheme) => res.json(allTheme))
    .catch((err) => res.status(500).json(err));
});
