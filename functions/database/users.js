const Database = require('./database');

class Users {
    constructor() {
        this.table = 'users';
        this.id = 'id';
        this.uid = 'uid';
        this.displayName = 'displayName';
        this.email = 'email';
    }

    async getUsers() {
        let database = new Database();
        let query = `SELECT * FROM ${this.table}`;
        let options = [];
        return await database.query(query, options)
            .catch(err => {
                throw err
            })
            .finally(() => database.close());
    }

    async getUser(uid) {
        let database = new Database();
        let query = `SELECT * FROM ${this.table} WHERE ${this.uid} = ?`;
        let options = [uid];
        return await database.query(query, options)
            .then(results => {
                return results[0];
            })
            .catch(err => {
                throw err
            })
            .finally(() => database.close());
    }

    async newUser(uid, displayName, email) {
        let database = new Database();
        const values = [
            this.uid,
            this.displayName,
            this.email,
        ];
        let query = `INSERT INTO ${this.table} (${values.join(',')}) VALUES (${values.map(() => '?').join(',')})`;
        let options = [uid, displayName, email];
        return await database.query(query, options)
            .then(async () => {
                return await this.getUser(uid);
            })
            .catch(err => {
                throw err
            })
            .finally(() => database.close());
    }
}

module.exports = Users;