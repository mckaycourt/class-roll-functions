const Database = require('./database');

class Desks {
    constructor() {
        this.table = 'desks';
        this.id = 'id';
        this.deskName = 'deskName';
        this.classId = 'classId';
    }
}

module.exports = Desks;