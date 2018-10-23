const USER_NAME = process.env.USERNAME;

const CHROME_PATHS = [
    `C://Users/${USER_NAME}/AppData/Local/Google/Chrome/User Data/History`,
    `C://Users/${USER_NAME}/AppData/Local/Google/Chrome/User Data/Default/History`,
    `C://Users/${USER_NAME}/AppData/Local/Google/Chrome/User Data/Profile 1/History`,
    `C://Users/${USER_NAME}/AppData/Local/Google/Chrome/User Data/Profile 2/History`,
    `C://Users/${USER_NAME}/AppData/Local/Google/Chrome/User Data/Profile 3/History`,
    `D://Users/${USER_NAME}/AppData/Local/Google/Chrome/User Data/History`,
    `D://Users/${USER_NAME}/AppData/Local/Google/Chrome/User Data/Default/History`,
    `D://Users/${USER_NAME}/AppData/Local/Google/Chrome/User Data/Profile 1/History`,
    `D://Users/${USER_NAME}/AppData/Local/Google/Chrome/User Data/Profile 2/History`,
    `D://Users/${USER_NAME}/AppData/Local/Google/Chrome/User Data/Profile 3/History`,
];

const INVALID_QUERY =
    'url NOT LIKE "%localhost%" ' +
    'AND ' +
    'title != "" ' +
    'AND ' +
    'title NOT LIKE "%Google 検索%"';

const RECENT_LOG_TOP_TEN =
    'SELECT * FROM urls ' +
    `WHERE ${INVALID_QUERY}` +
    'ORDER BY last_visit_time DESC ' +
    'LIMIT 10';

const SQL = {
    RECENT_LOG_TOP_TEN,
};

module.exports = {
    CHROME_PATHS,
    SQL,
};
