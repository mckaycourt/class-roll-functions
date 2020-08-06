const Database = require('./database');

class ClassRoom {
    constructor() {
        this.table = 'class';
        this.id = 'id';
        this.name = 'name';
        this.userId = 'userId';
    }

    async getClasses(userId){
        let database = new Database();
        let query = `SELECT * FROM ${this.table} WHERE ${this.userId} = ?`;
        let options = [userId];
        return await database.query(query, options)
            .catch(err => {
                throw err
            })
            .finally(() => database.close());
    }
}

module.exports = ClassRoom;