const functions = require('firebase-functions');
const {Users, ClassRoom, Desks, CheckIns} = require('./database/classes');

exports.addMessage = functions.https.onCall((data, context) => {
    return {
        results: `You called ${data.text}`
    }
});

exports.getUsers = functions.https.onCall(async (data, context) => {
    const usersDB = new Users();
    return await usersDB.getUsers()
        .then(users => {
            return {users};
        })
        .catch(err => {
            throw(err);
        })
});

exports.getUser = functions.https.onCall(async (data, context) => {
    const usersDB = new Users();
    const {uid, displayName, email} = data;
    if (uid) {
        return await usersDB.getUser(uid)
            .then(async user => {
                if (!user) {
                    user = await usersDB.newUser(uid, displayName, email)
                }
                return {user};
            })
            .catch(err => {
                throw(err);
            })
    } else {
        return {
            user: 'n/a'
        }
    }
});

exports.getClasses = functions.https.onCall(async (data, context) => {
    const classRoomDB = new ClassRoom();
    const {user} = data;
    return await classRoomDB.getClasses(user.id)
        .then(classes => {
            return {classes};
        })
        .catch(err => {
            throw err.message;
        })
});
