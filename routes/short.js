const express = require('express'), 
    router = express.Router(),
    ShortModel = require('../models/short'),
    SearchModel = require('../models/search');

router.get('/', async (req, res, next) => {
    const shortData = await ShortModel.getAll();


})

module.exports=router