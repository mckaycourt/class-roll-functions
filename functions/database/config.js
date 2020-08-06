const functions = require('firebase-functions');
console.log(functions.config());
console.log(process.env.NODE_ENV);
module.exports = {
    host: "localhost",
    database: "class_roll",
    user: functions.config().mysql.user,
    password: functions.config().mysql.password
};