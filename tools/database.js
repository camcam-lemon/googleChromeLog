const sqlite3 = require('sqlite3');
const { SQL } = require('./config');

let DB;

const initialize = () =>
    new Promise((resolve, reject) => {
        try {
            sqlite3.verbose();
            DB = new sqlite3.Database('./History');
            DB.on('error', err => {
                console.error(err);
                process.exit(1);
                reject(err);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });

const getHistory = () =>
    new Promise((resolve, reject) => {
        const { RECENT_LOG_TOP_TEN } = SQL;
        DB.serialize(() => {
            DB.all(RECENT_LOG_TOP_TEN, (error, rows) => {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                resolve(rows);
            });

            DB.close();
        });
    });

module.exports = {
    initialize,
    getHistory,
};
