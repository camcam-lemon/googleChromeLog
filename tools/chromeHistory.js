const express = require('express');
const username = require('username');
const fs = require('fs');
const DB = require('./database');

const router = express.Router();

router.get('*', async (req, res) => {
    let status = 200;
    let response = {};

    const user = await username();
    const file = `/Users/${user}/Library/Application Support/Google/Chrome/Default/History`;
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
