const express = require('express'),
    router = express.Router(),
    ShortModel = require('../models/short');

router.get('/', async (req, res, next) => {
    const shortList = await ShortModel.getAll();

    res.render('template', {
        locals: {
            title: 'Welcome to Short & Sweet URL Shortener',
            shortData: shortList,
        },
        partials: {
            body: 'partials/home',
        },
    });
});

module.exports = router;