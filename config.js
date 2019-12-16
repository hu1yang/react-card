const path = require('path');

module.exports = {
    DB_HOST: 'localhost',
    DB_USER: 'root',
    DB_PASS: 'root',
    DB_NAME: 'card',


    PORT: 3333,


    HTTP_ROOT: 'http://localhost:3333',
    UPLOAD_DIR: path.resolve(__dirname, './static/upload'),
}