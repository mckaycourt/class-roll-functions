const Database = require('./database');

class CheckIns {
    constructor() {
        this.table = 'checkIns';
        this.id = 'id';
        this.userId = 'userId';
        this.time = 'time';
        this.deskId = 'deskId';
    }
}

module.exports = CheckIns;