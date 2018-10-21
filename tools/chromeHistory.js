
const express = require('express');
const path = require('path');
const fs = require('fs');
const DB = require('./database');

const router = express.Router();

router.get('*', async (req, res) => {
    let status = 200;
    let response = {};

    const file = path.resolve('../../../Library/Application Support/Google/Chrome/Default/History');
    fs.copyFileSync(file, 'History');

    try {
        await DB.initialize();
        const history = await DB.getHistory();
        response.data = history;
    } catch (e) {
        status = 500;
        response.error = e;
        response.data = [];
    }

    res.status(status).json(response);
});

module.exports = router;


